import prisma from "../db/prisma.js";

export async function getAnalytics() {
  const [
    totalUsers,
    totalJobs,
    totalApplications,
    activeJobs,
    usersByRole,
    applicationsByStatus,
  ] = await prisma.$transaction([
    prisma.user.count(),
    prisma.job.count(),
    prisma.application.count(),
    prisma.job.count({ where: { status: "open" } }),
    prisma.user.groupBy({
      by: ["role"],
      _count: { role: true },
    }),
    prisma.application.groupBy({
      by: ["status"],
      _count: { status: true },
    }),
  ]);

  return {
    users: {
      total: totalUsers,
      byRole: usersByRole.map((r) => ({
        role: r.role,
        count: r._count.role,
      })),
    },
    jobs: {
      total: totalJobs,
      active: activeJobs,
    },
    applications: {
      total: totalApplications,
      byStatus: applicationsByStatus.map((a) => ({
        status: a.status,
        count: a._count.status,
      })),
    },
  };
}

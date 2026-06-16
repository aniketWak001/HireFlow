/**
 * Client
 **/

import * as runtime from "./runtime/client.js";
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model RefreshToken
 *
 */
export type RefreshToken =
  $Result.DefaultSelection<Prisma.$RefreshTokenPayload>;
/**
 * Model Job
 *
 */
export type Job = $Result.DefaultSelection<Prisma.$JobPayload>;
/**
 * Model Application
 *
 */
export type Application = $Result.DefaultSelection<Prisma.$ApplicationPayload>;
/**
 * Model Resume
 *
 */
export type Resume = $Result.DefaultSelection<Prisma.$ResumePayload>;
/**
 * Model Notification
 *
 */
export type Notification =
  $Result.DefaultSelection<Prisma.$NotificationPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
    candidate: "candidate";
    recruiter: "recruiter";
    admin: "admin";
  };

  export type Role = (typeof Role)[keyof typeof Role];

  export const JobType: {
    full_time: "full_time";
    part_time: "part_time";
    remote: "remote";
    contract: "contract";
  };

  export type JobType = (typeof JobType)[keyof typeof JobType];

  export const JobStatus: {
    open: "open";
    closed: "closed";
    draft: "draft";
  };

  export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

  export const ApplicationStatus: {
    applied: "applied";
    reviewed: "reviewed";
    interview: "interview";
    hired: "hired";
    rejected: "rejected";
  };

  export type ApplicationStatus =
    (typeof ApplicationStatus)[keyof typeof ApplicationStatus];

  export const ParseStatus: {
    pending: "pending";
    processing: "processing";
    done: "done";
    failed: "failed";
  };

  export type ParseStatus = (typeof ParseStatus)[keyof typeof ParseStatus];

  export const NotificationType: {
    application_received: "application_received";
    status_change: "status_change";
    interview_invite: "interview_invite";
  };

  export type NotificationType =
    (typeof NotificationType)[keyof typeof NotificationType];
}

export type Role = $Enums.Role;

export const Role: typeof $Enums.Role;

export type JobType = $Enums.JobType;

export const JobType: typeof $Enums.JobType;

export type JobStatus = $Enums.JobStatus;

export const JobStatus: typeof $Enums.JobStatus;

export type ApplicationStatus = $Enums.ApplicationStatus;

export const ApplicationStatus: typeof $Enums.ApplicationStatus;

export type ParseStatus = $Enums.ParseStatus;

export const ParseStatus: typeof $Enums.ParseStatus;

export type NotificationType = $Enums.NotificationType;

export const NotificationType: typeof $Enums.NotificationType;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = "log" extends keyof ClientOptions
    ? ClientOptions["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions["log"]>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    "extends",
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more RefreshTokens
   * const refreshTokens = await prisma.refreshToken.findMany()
   * ```
   */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.job`: Exposes CRUD operations for the **Job** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Jobs
   * const jobs = await prisma.job.findMany()
   * ```
   */
  get job(): Prisma.JobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.application`: Exposes CRUD operations for the **Application** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Applications
   * const applications = await prisma.application.findMany()
   * ```
   */
  get application(): Prisma.ApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resume`: Exposes CRUD operations for the **Resume** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Resumes
   * const resumes = await prisma.resume.findMany()
   * ```
   */
  get resume(): Prisma.ResumeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Notifications
   * const notifications = await prisma.notification.findMany()
   * ```
   */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string;
    engine: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import Bytes = runtime.Bytes;
  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? "Please either choose `select` or `include`."
    : T extends SelectAndOmit
      ? "Please either choose `select` or `omit`."
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<"OR", K>, Extends<"AND", K>>,
      Extends<"NOT", K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: "User";
    RefreshToken: "RefreshToken";
    Job: "Job";
    Application: "Application";
    Resume: "Resume";
    Notification: "Notification";
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<
    { extArgs: $Extensions.InternalArgs },
    $Utils.Record<string, any>
  > {
    returns: Prisma.TypeMap<
      this["params"]["extArgs"],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps:
        | "user"
        | "refreshToken"
        | "job"
        | "application"
        | "resume"
        | "notification";
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>;
        fields: Prisma.RefreshTokenFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
          };
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
          };
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[];
          };
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
          };
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[];
          };
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
          };
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
          };
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[];
          };
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
          };
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateRefreshToken>;
          };
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>;
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[];
          };
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<RefreshTokenCountAggregateOutputType>
              | number;
          };
        };
      };
      Job: {
        payload: Prisma.$JobPayload<ExtArgs>;
        fields: Prisma.JobFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.JobFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.JobFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPayload>;
          };
          findFirst: {
            args: Prisma.JobFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.JobFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPayload>;
          };
          findMany: {
            args: Prisma.JobFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[];
          };
          create: {
            args: Prisma.JobCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPayload>;
          };
          createMany: {
            args: Prisma.JobCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.JobCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[];
          };
          delete: {
            args: Prisma.JobDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPayload>;
          };
          update: {
            args: Prisma.JobUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPayload>;
          };
          deleteMany: {
            args: Prisma.JobDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.JobUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.JobUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[];
          };
          upsert: {
            args: Prisma.JobUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPayload>;
          };
          aggregate: {
            args: Prisma.JobAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateJob>;
          };
          groupBy: {
            args: Prisma.JobGroupByArgs<ExtArgs>;
            result: $Utils.Optional<JobGroupByOutputType>[];
          };
          count: {
            args: Prisma.JobCountArgs<ExtArgs>;
            result: $Utils.Optional<JobCountAggregateOutputType> | number;
          };
        };
      };
      Application: {
        payload: Prisma.$ApplicationPayload<ExtArgs>;
        fields: Prisma.ApplicationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ApplicationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ApplicationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>;
          };
          findFirst: {
            args: Prisma.ApplicationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ApplicationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>;
          };
          findMany: {
            args: Prisma.ApplicationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[];
          };
          create: {
            args: Prisma.ApplicationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>;
          };
          createMany: {
            args: Prisma.ApplicationCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ApplicationCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[];
          };
          delete: {
            args: Prisma.ApplicationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>;
          };
          update: {
            args: Prisma.ApplicationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>;
          };
          deleteMany: {
            args: Prisma.ApplicationDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ApplicationUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ApplicationUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[];
          };
          upsert: {
            args: Prisma.ApplicationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>;
          };
          aggregate: {
            args: Prisma.ApplicationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateApplication>;
          };
          groupBy: {
            args: Prisma.ApplicationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ApplicationGroupByOutputType>[];
          };
          count: {
            args: Prisma.ApplicationCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<ApplicationCountAggregateOutputType>
              | number;
          };
        };
      };
      Resume: {
        payload: Prisma.$ResumePayload<ExtArgs>;
        fields: Prisma.ResumeFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ResumeFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ResumePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ResumeFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>;
          };
          findFirst: {
            args: Prisma.ResumeFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ResumePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ResumeFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>;
          };
          findMany: {
            args: Prisma.ResumeFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[];
          };
          create: {
            args: Prisma.ResumeCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>;
          };
          createMany: {
            args: Prisma.ResumeCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ResumeCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[];
          };
          delete: {
            args: Prisma.ResumeDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>;
          };
          update: {
            args: Prisma.ResumeUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>;
          };
          deleteMany: {
            args: Prisma.ResumeDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ResumeUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ResumeUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[];
          };
          upsert: {
            args: Prisma.ResumeUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>;
          };
          aggregate: {
            args: Prisma.ResumeAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateResume>;
          };
          groupBy: {
            args: Prisma.ResumeGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ResumeGroupByOutputType>[];
          };
          count: {
            args: Prisma.ResumeCountArgs<ExtArgs>;
            result: $Utils.Optional<ResumeCountAggregateOutputType> | number;
          };
        };
      };
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>;
        fields: Prisma.NotificationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>;
          };
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>;
          };
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[];
          };
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>;
          };
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[];
          };
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>;
          };
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>;
          };
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[];
          };
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>;
          };
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateNotification>;
          };
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<NotificationGroupByOutputType>[];
          };
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<NotificationCountAggregateOutputType>
              | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    "define",
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = "pretty" | "colorless" | "minimal";
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory;
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string;
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
  }
  export type GlobalOmitConfig = {
    user?: UserOmit;
    refreshToken?: RefreshTokenOmit;
    job?: JobOmit;
    application?: ApplicationOmit;
    resume?: ResumeOmit;
    notification?: NotificationOmit;
  };

  /* Types for Logging */
  export type LogLevel = "info" | "query" | "warn" | "error";
  export type LogDefinition = {
    level: LogLevel;
    emit: "stdout" | "event";
  };

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T["level"] : T
  >;

  export type GetEvents<T extends any[]> =
    T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | "findUnique"
    | "findUniqueOrThrow"
    | "findMany"
    | "findFirst"
    | "findFirstOrThrow"
    | "create"
    | "createMany"
    | "createManyAndReturn"
    | "update"
    | "updateMany"
    | "updateManyAndReturn"
    | "upsert"
    | "delete"
    | "deleteMany"
    | "executeRaw"
    | "queryRaw"
    | "aggregate"
    | "count"
    | "runCommandRaw"
    | "findRaw"
    | "groupBy";

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    jobs: number;
    applications: number;
    resumes: number;
    refreshTokens: number;
    notifications: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    jobs?: boolean | UserCountOutputTypeCountJobsArgs;
    applications?: boolean | UserCountOutputTypeCountApplicationsArgs;
    resumes?: boolean | UserCountOutputTypeCountResumesArgs;
    refreshTokens?: boolean | UserCountOutputTypeCountRefreshTokensArgs;
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJobsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: JobWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApplicationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ApplicationWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountResumesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ResumeWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshTokensArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: RefreshTokenWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: NotificationWhereInput;
  };

  /**
   * Count Type JobCountOutputType
   */

  export type JobCountOutputType = {
    applications: number;
  };

  export type JobCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    applications?: boolean | JobCountOutputTypeCountApplicationsArgs;
  };

  // Custom InputTypes
  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobCountOutputType
     */
    select?: JobCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountApplicationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ApplicationWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    passwordHash: string | null;
    role: $Enums.Role | null;
    isVerified: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    passwordHash: string | null;
    role: $Enums.Role | null;
    isVerified: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    passwordHash: number;
    role: number;
    isVerified: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    passwordHash?: true;
    role?: true;
    isVerified?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    passwordHash?: true;
    role?: true;
    isVerified?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    passwordHash?: true;
    role?: true;
    isVerified?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    name: string;
    email: string;
    passwordHash: string;
    role: $Enums.Role;
    isVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      passwordHash?: boolean;
      role?: boolean;
      isVerified?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      jobs?: boolean | User$jobsArgs<ExtArgs>;
      applications?: boolean | User$applicationsArgs<ExtArgs>;
      resumes?: boolean | User$resumesArgs<ExtArgs>;
      refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>;
      notifications?: boolean | User$notificationsArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      passwordHash?: boolean;
      role?: boolean;
      isVerified?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      passwordHash?: boolean;
      role?: boolean;
      isVerified?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    role?: boolean;
    isVerified?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "name"
    | "email"
    | "passwordHash"
    | "role"
    | "isVerified"
    | "createdAt"
    | "updatedAt",
    ExtArgs["result"]["user"]
  >;
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    jobs?: boolean | User$jobsArgs<ExtArgs>;
    applications?: boolean | User$applicationsArgs<ExtArgs>;
    resumes?: boolean | User$resumesArgs<ExtArgs>;
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>;
    notifications?: boolean | User$notificationsArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type UserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "User";
    objects: {
      jobs: Prisma.$JobPayload<ExtArgs>[];
      applications: Prisma.$ApplicationPayload<ExtArgs>[];
      resumes: Prisma.$ResumePayload<ExtArgs>[];
      refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[];
      notifications: Prisma.$NotificationPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        email: string;
        passwordHash: string;
        role: $Enums.Role;
        isVerified: boolean;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["user"]
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["User"];
      meta: { name: "User" };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs["orderBy"] }
        : { orderBy?: UserGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    jobs<T extends User$jobsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$jobsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$JobPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    applications<T extends User$applicationsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$applicationsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ApplicationPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    resumes<T extends User$resumesArgs<ExtArgs> = {}>(
      args?: Subset<T, User$resumesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ResumePayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    refreshTokens<T extends User$refreshTokensArgs<ExtArgs> = {}>(
      args?: Subset<T, User$refreshTokensArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$RefreshTokenPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$notificationsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$NotificationPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", "String">;
    readonly name: FieldRef<"User", "String">;
    readonly email: FieldRef<"User", "String">;
    readonly passwordHash: FieldRef<"User", "String">;
    readonly role: FieldRef<"User", "Role">;
    readonly isVerified: FieldRef<"User", "Boolean">;
    readonly createdAt: FieldRef<"User", "DateTime">;
    readonly updatedAt: FieldRef<"User", "DateTime">;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User.jobs
   */
  export type User$jobsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null;
    where?: JobWhereInput;
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[];
    cursor?: JobWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[];
  };

  /**
   * User.applications
   */
  export type User$applicationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null;
    where?: ApplicationWhereInput;
    orderBy?:
      | ApplicationOrderByWithRelationInput
      | ApplicationOrderByWithRelationInput[];
    cursor?: ApplicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[];
  };

  /**
   * User.resumes
   */
  export type User$resumesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null;
    where?: ResumeWhereInput;
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[];
    cursor?: ResumeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[];
  };

  /**
   * User.refreshTokens
   */
  export type User$refreshTokensArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null;
    where?: RefreshTokenWhereInput;
    orderBy?:
      | RefreshTokenOrderByWithRelationInput
      | RefreshTokenOrderByWithRelationInput[];
    cursor?: RefreshTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[];
  };

  /**
   * User.notifications
   */
  export type User$notificationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null;
    where?: NotificationWhereInput;
    orderBy?:
      | NotificationOrderByWithRelationInput
      | NotificationOrderByWithRelationInput[];
    cursor?: NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null;
    _min: RefreshTokenMinAggregateOutputType | null;
    _max: RefreshTokenMaxAggregateOutputType | null;
  };

  export type RefreshTokenMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    token: string | null;
    expiresAt: Date | null;
    createdAt: Date | null;
  };

  export type RefreshTokenMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    token: string | null;
    expiresAt: Date | null;
    createdAt: Date | null;
  };

  export type RefreshTokenCountAggregateOutputType = {
    id: number;
    userId: number;
    token: number;
    expiresAt: number;
    createdAt: number;
    _all: number;
  };

  export type RefreshTokenMinAggregateInputType = {
    id?: true;
    userId?: true;
    token?: true;
    expiresAt?: true;
    createdAt?: true;
  };

  export type RefreshTokenMaxAggregateInputType = {
    id?: true;
    userId?: true;
    token?: true;
    expiresAt?: true;
    createdAt?: true;
  };

  export type RefreshTokenCountAggregateInputType = {
    id?: true;
    userId?: true;
    token?: true;
    expiresAt?: true;
    createdAt?: true;
    _all?: true;
  };

  export type RefreshTokenAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?:
      | RefreshTokenOrderByWithRelationInput
      | RefreshTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RefreshTokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned RefreshTokens
     **/
    _count?: true | RefreshTokenCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: RefreshTokenMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: RefreshTokenMaxAggregateInputType;
  };

  export type GetRefreshTokenAggregateType<
    T extends RefreshTokenAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateRefreshToken]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>;
  };

  export type RefreshTokenGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: RefreshTokenWhereInput;
    orderBy?:
      | RefreshTokenOrderByWithAggregationInput
      | RefreshTokenOrderByWithAggregationInput[];
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum;
    having?: RefreshTokenScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RefreshTokenCountAggregateInputType | true;
    _min?: RefreshTokenMinAggregateInputType;
    _max?: RefreshTokenMaxAggregateInputType;
  };

  export type RefreshTokenGroupByOutputType = {
    id: string;
    userId: string;
    token: string;
    expiresAt: Date;
    createdAt: Date;
    _count: RefreshTokenCountAggregateOutputType | null;
    _min: RefreshTokenMinAggregateOutputType | null;
    _max: RefreshTokenMaxAggregateOutputType | null;
  };

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<RefreshTokenGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof RefreshTokenGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>;
        }
      >
    >;

  export type RefreshTokenSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      token?: boolean;
      expiresAt?: boolean;
      createdAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["refreshToken"]
  >;

  export type RefreshTokenSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      token?: boolean;
      expiresAt?: boolean;
      createdAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["refreshToken"]
  >;

  export type RefreshTokenSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      token?: boolean;
      expiresAt?: boolean;
      createdAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["refreshToken"]
  >;

  export type RefreshTokenSelectScalar = {
    id?: boolean;
    userId?: boolean;
    token?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
  };

  export type RefreshTokenOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "userId" | "token" | "expiresAt" | "createdAt",
    ExtArgs["result"]["refreshToken"]
  >;
  export type RefreshTokenInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type RefreshTokenIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type RefreshTokenIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $RefreshTokenPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "RefreshToken";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        token: string;
        expiresAt: Date;
        createdAt: Date;
      },
      ExtArgs["result"]["refreshToken"]
    >;
    composites: {};
  };

  type RefreshTokenGetPayload<
    S extends boolean | null | undefined | RefreshTokenDefaultArgs,
  > = $Result.GetResult<Prisma.$RefreshTokenPayload, S>;

  type RefreshTokenCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    RefreshTokenFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: RefreshTokenCountAggregateInputType | true;
  };

  export interface RefreshTokenDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["RefreshToken"];
      meta: { name: "RefreshToken" };
    };
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(
      args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>,
    ): Prisma__RefreshTokenClient<
      $Result.GetResult<
        Prisma.$RefreshTokenPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(
      args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__RefreshTokenClient<
      $Result.GetResult<
        Prisma.$RefreshTokenPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(
      args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>,
    ): Prisma__RefreshTokenClient<
      $Result.GetResult<
        Prisma.$RefreshTokenPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__RefreshTokenClient<
      $Result.GetResult<
        Prisma.$RefreshTokenPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     *
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     *
     */
    findMany<T extends RefreshTokenFindManyArgs>(
      args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$RefreshTokenPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     *
     */
    create<T extends RefreshTokenCreateArgs>(
      args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>,
    ): Prisma__RefreshTokenClient<
      $Result.GetResult<
        Prisma.$RefreshTokenPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends RefreshTokenCreateManyArgs>(
      args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many RefreshTokens and returns the data saved in the database.
     * @param {RefreshTokenCreateManyAndReturnArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends RefreshTokenCreateManyAndReturnArgs>(
      args?: SelectSubset<T, RefreshTokenCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$RefreshTokenPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     *
     */
    delete<T extends RefreshTokenDeleteArgs>(
      args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>,
    ): Prisma__RefreshTokenClient<
      $Result.GetResult<
        Prisma.$RefreshTokenPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends RefreshTokenUpdateArgs>(
      args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>,
    ): Prisma__RefreshTokenClient<
      $Result.GetResult<
        Prisma.$RefreshTokenPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(
      args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(
      args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more RefreshTokens and returns the data updated in the database.
     * @param {RefreshTokenUpdateManyAndReturnArgs} args - Arguments to update many RefreshTokens.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends RefreshTokenUpdateManyAndReturnArgs>(
      args: SelectSubset<T, RefreshTokenUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$RefreshTokenPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(
      args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>,
    ): Prisma__RefreshTokenClient<
      $Result.GetResult<
        Prisma.$RefreshTokenPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
     **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], RefreshTokenCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends RefreshTokenAggregateArgs>(
      args: Subset<T, RefreshTokenAggregateArgs>,
    ): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>;

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs["orderBy"] }
        : { orderBy?: RefreshTokenGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetRefreshTokenGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the RefreshToken model
     */
    readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the RefreshToken model
   */
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", "String">;
    readonly userId: FieldRef<"RefreshToken", "String">;
    readonly token: FieldRef<"RefreshToken", "String">;
    readonly expiresAt: FieldRef<"RefreshToken", "DateTime">;
    readonly createdAt: FieldRef<"RefreshToken", "DateTime">;
  }

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null;
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput;
  };

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null;
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput;
  };

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null;
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?:
      | RefreshTokenOrderByWithRelationInput
      | RefreshTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RefreshTokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[];
  };

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null;
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?:
      | RefreshTokenOrderByWithRelationInput
      | RefreshTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RefreshTokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[];
  };

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null;
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?:
      | RefreshTokenOrderByWithRelationInput
      | RefreshTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RefreshTokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[];
  };

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null;
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>;
  };

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * RefreshToken createManyAndReturn
   */
  export type RefreshTokenCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null;
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>;
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput;
  };

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<
      RefreshTokenUpdateManyMutationInput,
      RefreshTokenUncheckedUpdateManyInput
    >;
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput;
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number;
  };

  /**
   * RefreshToken updateManyAndReturn
   */
  export type RefreshTokenUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<
      RefreshTokenUpdateManyMutationInput,
      RefreshTokenUncheckedUpdateManyInput
    >;
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput;
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null;
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput;
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>;
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>;
  };

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null;
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput;
  };

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput;
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number;
  };

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null;
  };

  /**
   * Model Job
   */

  export type AggregateJob = {
    _count: JobCountAggregateOutputType | null;
    _avg: JobAvgAggregateOutputType | null;
    _sum: JobSumAggregateOutputType | null;
    _min: JobMinAggregateOutputType | null;
    _max: JobMaxAggregateOutputType | null;
  };

  export type JobAvgAggregateOutputType = {
    salaryMin: number | null;
    salaryMax: number | null;
  };

  export type JobSumAggregateOutputType = {
    salaryMin: number | null;
    salaryMax: number | null;
  };

  export type JobMinAggregateOutputType = {
    id: string | null;
    recruiterId: string | null;
    title: string | null;
    description: string | null;
    location: string | null;
    jobType: $Enums.JobType | null;
    salaryMin: number | null;
    salaryMax: number | null;
    status: $Enums.JobStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type JobMaxAggregateOutputType = {
    id: string | null;
    recruiterId: string | null;
    title: string | null;
    description: string | null;
    location: string | null;
    jobType: $Enums.JobType | null;
    salaryMin: number | null;
    salaryMax: number | null;
    status: $Enums.JobStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type JobCountAggregateOutputType = {
    id: number;
    recruiterId: number;
    title: number;
    description: number;
    location: number;
    jobType: number;
    salaryMin: number;
    salaryMax: number;
    skillsRequired: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type JobAvgAggregateInputType = {
    salaryMin?: true;
    salaryMax?: true;
  };

  export type JobSumAggregateInputType = {
    salaryMin?: true;
    salaryMax?: true;
  };

  export type JobMinAggregateInputType = {
    id?: true;
    recruiterId?: true;
    title?: true;
    description?: true;
    location?: true;
    jobType?: true;
    salaryMin?: true;
    salaryMax?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type JobMaxAggregateInputType = {
    id?: true;
    recruiterId?: true;
    title?: true;
    description?: true;
    location?: true;
    jobType?: true;
    salaryMin?: true;
    salaryMax?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type JobCountAggregateInputType = {
    id?: true;
    recruiterId?: true;
    title?: true;
    description?: true;
    location?: true;
    jobType?: true;
    salaryMin?: true;
    salaryMax?: true;
    skillsRequired?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type JobAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Job to aggregate.
     */
    where?: JobWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: JobWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Jobs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Jobs
     **/
    _count?: true | JobCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: JobAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: JobSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: JobMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: JobMaxAggregateInputType;
  };

  export type GetJobAggregateType<T extends JobAggregateArgs> = {
    [P in keyof T & keyof AggregateJob]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob[P]>
      : GetScalarType<T[P], AggregateJob[P]>;
  };

  export type JobGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: JobWhereInput;
    orderBy?: JobOrderByWithAggregationInput | JobOrderByWithAggregationInput[];
    by: JobScalarFieldEnum[] | JobScalarFieldEnum;
    having?: JobScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: JobCountAggregateInputType | true;
    _avg?: JobAvgAggregateInputType;
    _sum?: JobSumAggregateInputType;
    _min?: JobMinAggregateInputType;
    _max?: JobMaxAggregateInputType;
  };

  export type JobGroupByOutputType = {
    id: string;
    recruiterId: string;
    title: string;
    description: string;
    location: string | null;
    jobType: $Enums.JobType;
    salaryMin: number | null;
    salaryMax: number | null;
    skillsRequired: string[];
    status: $Enums.JobStatus;
    createdAt: Date;
    updatedAt: Date;
    _count: JobCountAggregateOutputType | null;
    _avg: JobAvgAggregateOutputType | null;
    _sum: JobSumAggregateOutputType | null;
    _min: JobMinAggregateOutputType | null;
    _max: JobMaxAggregateOutputType | null;
  };

  type GetJobGroupByPayload<T extends JobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof JobGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], JobGroupByOutputType[P]>
          : GetScalarType<T[P], JobGroupByOutputType[P]>;
      }
    >
  >;

  export type JobSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      recruiterId?: boolean;
      title?: boolean;
      description?: boolean;
      location?: boolean;
      jobType?: boolean;
      salaryMin?: boolean;
      salaryMax?: boolean;
      skillsRequired?: boolean;
      status?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      recruiter?: boolean | UserDefaultArgs<ExtArgs>;
      applications?: boolean | Job$applicationsArgs<ExtArgs>;
      _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["job"]
  >;

  export type JobSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      recruiterId?: boolean;
      title?: boolean;
      description?: boolean;
      location?: boolean;
      jobType?: boolean;
      salaryMin?: boolean;
      salaryMax?: boolean;
      skillsRequired?: boolean;
      status?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      recruiter?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["job"]
  >;

  export type JobSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      recruiterId?: boolean;
      title?: boolean;
      description?: boolean;
      location?: boolean;
      jobType?: boolean;
      salaryMin?: boolean;
      salaryMax?: boolean;
      skillsRequired?: boolean;
      status?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      recruiter?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["job"]
  >;

  export type JobSelectScalar = {
    id?: boolean;
    recruiterId?: boolean;
    title?: boolean;
    description?: boolean;
    location?: boolean;
    jobType?: boolean;
    salaryMin?: boolean;
    salaryMax?: boolean;
    skillsRequired?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type JobOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "recruiterId"
    | "title"
    | "description"
    | "location"
    | "jobType"
    | "salaryMin"
    | "salaryMax"
    | "skillsRequired"
    | "status"
    | "createdAt"
    | "updatedAt",
    ExtArgs["result"]["job"]
  >;
  export type JobInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    recruiter?: boolean | UserDefaultArgs<ExtArgs>;
    applications?: boolean | Job$applicationsArgs<ExtArgs>;
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type JobIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    recruiter?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type JobIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    recruiter?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $JobPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Job";
    objects: {
      recruiter: Prisma.$UserPayload<ExtArgs>;
      applications: Prisma.$ApplicationPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        recruiterId: string;
        title: string;
        description: string;
        location: string | null;
        jobType: $Enums.JobType;
        salaryMin: number | null;
        salaryMax: number | null;
        skillsRequired: string[];
        status: $Enums.JobStatus;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["job"]
    >;
    composites: {};
  };

  type JobGetPayload<S extends boolean | null | undefined | JobDefaultArgs> =
    $Result.GetResult<Prisma.$JobPayload, S>;

  type JobCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<JobFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: JobCountAggregateInputType | true;
  };

  export interface JobDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Job"];
      meta: { name: "Job" };
    };
    /**
     * Find zero or one Job that matches the filter.
     * @param {JobFindUniqueArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobFindUniqueArgs>(
      args: SelectSubset<T, JobFindUniqueArgs<ExtArgs>>,
    ): Prisma__JobClient<
      $Result.GetResult<
        Prisma.$JobPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Job that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobFindUniqueOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobFindUniqueOrThrowArgs>(
      args: SelectSubset<T, JobFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__JobClient<
      $Result.GetResult<
        Prisma.$JobPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Job that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobFindFirstArgs>(
      args?: SelectSubset<T, JobFindFirstArgs<ExtArgs>>,
    ): Prisma__JobClient<
      $Result.GetResult<
        Prisma.$JobPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Job that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobFindFirstOrThrowArgs>(
      args?: SelectSubset<T, JobFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__JobClient<
      $Result.GetResult<
        Prisma.$JobPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.job.findMany()
     *
     * // Get first 10 Jobs
     * const jobs = await prisma.job.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const jobWithIdOnly = await prisma.job.findMany({ select: { id: true } })
     *
     */
    findMany<T extends JobFindManyArgs>(
      args?: SelectSubset<T, JobFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$JobPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Job.
     * @param {JobCreateArgs} args - Arguments to create a Job.
     * @example
     * // Create one Job
     * const Job = await prisma.job.create({
     *   data: {
     *     // ... data to create a Job
     *   }
     * })
     *
     */
    create<T extends JobCreateArgs>(
      args: SelectSubset<T, JobCreateArgs<ExtArgs>>,
    ): Prisma__JobClient<
      $Result.GetResult<
        Prisma.$JobPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Jobs.
     * @param {JobCreateManyArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends JobCreateManyArgs>(
      args?: SelectSubset<T, JobCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Jobs and returns the data saved in the database.
     * @param {JobCreateManyAndReturnArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Jobs and only return the `id`
     * const jobWithIdOnly = await prisma.job.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends JobCreateManyAndReturnArgs>(
      args?: SelectSubset<T, JobCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$JobPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Job.
     * @param {JobDeleteArgs} args - Arguments to delete one Job.
     * @example
     * // Delete one Job
     * const Job = await prisma.job.delete({
     *   where: {
     *     // ... filter to delete one Job
     *   }
     * })
     *
     */
    delete<T extends JobDeleteArgs>(
      args: SelectSubset<T, JobDeleteArgs<ExtArgs>>,
    ): Prisma__JobClient<
      $Result.GetResult<
        Prisma.$JobPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Job.
     * @param {JobUpdateArgs} args - Arguments to update one Job.
     * @example
     * // Update one Job
     * const job = await prisma.job.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends JobUpdateArgs>(
      args: SelectSubset<T, JobUpdateArgs<ExtArgs>>,
    ): Prisma__JobClient<
      $Result.GetResult<
        Prisma.$JobPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Jobs.
     * @param {JobDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.job.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends JobDeleteManyArgs>(
      args?: SelectSubset<T, JobDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends JobUpdateManyArgs>(
      args: SelectSubset<T, JobUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Jobs and returns the data updated in the database.
     * @param {JobUpdateManyAndReturnArgs} args - Arguments to update many Jobs.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Jobs and only return the `id`
     * const jobWithIdOnly = await prisma.job.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends JobUpdateManyAndReturnArgs>(
      args: SelectSubset<T, JobUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$JobPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Job.
     * @param {JobUpsertArgs} args - Arguments to update or create a Job.
     * @example
     * // Update or create a Job
     * const job = await prisma.job.upsert({
     *   create: {
     *     // ... data to create a Job
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job we want to update
     *   }
     * })
     */
    upsert<T extends JobUpsertArgs>(
      args: SelectSubset<T, JobUpsertArgs<ExtArgs>>,
    ): Prisma__JobClient<
      $Result.GetResult<
        Prisma.$JobPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.job.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
     **/
    count<T extends JobCountArgs>(
      args?: Subset<T, JobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], JobCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends JobAggregateArgs>(
      args: Subset<T, JobAggregateArgs>,
    ): Prisma.PrismaPromise<GetJobAggregateType<T>>;

    /**
     * Group by Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends JobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobGroupByArgs["orderBy"] }
        : { orderBy?: JobGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, JobGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetJobGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Job model
     */
    readonly fields: JobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Job.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    recruiter<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    applications<T extends Job$applicationsArgs<ExtArgs> = {}>(
      args?: Subset<T, Job$applicationsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ApplicationPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Job model
   */
  interface JobFieldRefs {
    readonly id: FieldRef<"Job", "String">;
    readonly recruiterId: FieldRef<"Job", "String">;
    readonly title: FieldRef<"Job", "String">;
    readonly description: FieldRef<"Job", "String">;
    readonly location: FieldRef<"Job", "String">;
    readonly jobType: FieldRef<"Job", "JobType">;
    readonly salaryMin: FieldRef<"Job", "Int">;
    readonly salaryMax: FieldRef<"Job", "Int">;
    readonly skillsRequired: FieldRef<"Job", "String[]">;
    readonly status: FieldRef<"Job", "JobStatus">;
    readonly createdAt: FieldRef<"Job", "DateTime">;
    readonly updatedAt: FieldRef<"Job", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Job findUnique
   */
  export type JobFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null;
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput;
  };

  /**
   * Job findUniqueOrThrow
   */
  export type JobFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null;
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput;
  };

  /**
   * Job findFirst
   */
  export type JobFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null;
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Jobs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[];
  };

  /**
   * Job findFirstOrThrow
   */
  export type JobFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null;
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Jobs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[];
  };

  /**
   * Job findMany
   */
  export type JobFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null;
    /**
     * Filter, which Jobs to fetch.
     */
    where?: JobWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Jobs.
     */
    cursor?: JobWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Jobs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[];
  };

  /**
   * Job create
   */
  export type JobCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null;
    /**
     * The data needed to create a Job.
     */
    data: XOR<JobCreateInput, JobUncheckedCreateInput>;
  };

  /**
   * Job createMany
   */
  export type JobCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Job createManyAndReturn
   */
  export type JobCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null;
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Job update
   */
  export type JobUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null;
    /**
     * The data needed to update a Job.
     */
    data: XOR<JobUpdateInput, JobUncheckedUpdateInput>;
    /**
     * Choose, which Job to update.
     */
    where: JobWhereUniqueInput;
  };

  /**
   * Job updateMany
   */
  export type JobUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>;
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput;
    /**
     * Limit how many Jobs to update.
     */
    limit?: number;
  };

  /**
   * Job updateManyAndReturn
   */
  export type JobUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null;
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>;
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput;
    /**
     * Limit how many Jobs to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Job upsert
   */
  export type JobUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null;
    /**
     * The filter to search for the Job to update in case it exists.
     */
    where: JobWhereUniqueInput;
    /**
     * In case the Job found by the `where` argument doesn't exist, create a new Job with this data.
     */
    create: XOR<JobCreateInput, JobUncheckedCreateInput>;
    /**
     * In case the Job was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobUpdateInput, JobUncheckedUpdateInput>;
  };

  /**
   * Job delete
   */
  export type JobDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null;
    /**
     * Filter which Job to delete.
     */
    where: JobWhereUniqueInput;
  };

  /**
   * Job deleteMany
   */
  export type JobDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Jobs to delete
     */
    where?: JobWhereInput;
    /**
     * Limit how many Jobs to delete.
     */
    limit?: number;
  };

  /**
   * Job.applications
   */
  export type Job$applicationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null;
    where?: ApplicationWhereInput;
    orderBy?:
      | ApplicationOrderByWithRelationInput
      | ApplicationOrderByWithRelationInput[];
    cursor?: ApplicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[];
  };

  /**
   * Job without action
   */
  export type JobDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null;
  };

  /**
   * Model Application
   */

  export type AggregateApplication = {
    _count: ApplicationCountAggregateOutputType | null;
    _avg: ApplicationAvgAggregateOutputType | null;
    _sum: ApplicationSumAggregateOutputType | null;
    _min: ApplicationMinAggregateOutputType | null;
    _max: ApplicationMaxAggregateOutputType | null;
  };

  export type ApplicationAvgAggregateOutputType = {
    atsScore: number | null;
  };

  export type ApplicationSumAggregateOutputType = {
    atsScore: number | null;
  };

  export type ApplicationMinAggregateOutputType = {
    id: string | null;
    candidateId: string | null;
    jobId: string | null;
    resumeUrl: string | null;
    status: $Enums.ApplicationStatus | null;
    coverLetter: string | null;
    atsScore: number | null;
    appliedAt: Date | null;
    updatedAt: Date | null;
  };

  export type ApplicationMaxAggregateOutputType = {
    id: string | null;
    candidateId: string | null;
    jobId: string | null;
    resumeUrl: string | null;
    status: $Enums.ApplicationStatus | null;
    coverLetter: string | null;
    atsScore: number | null;
    appliedAt: Date | null;
    updatedAt: Date | null;
  };

  export type ApplicationCountAggregateOutputType = {
    id: number;
    candidateId: number;
    jobId: number;
    resumeUrl: number;
    status: number;
    coverLetter: number;
    atsScore: number;
    appliedAt: number;
    updatedAt: number;
    _all: number;
  };

  export type ApplicationAvgAggregateInputType = {
    atsScore?: true;
  };

  export type ApplicationSumAggregateInputType = {
    atsScore?: true;
  };

  export type ApplicationMinAggregateInputType = {
    id?: true;
    candidateId?: true;
    jobId?: true;
    resumeUrl?: true;
    status?: true;
    coverLetter?: true;
    atsScore?: true;
    appliedAt?: true;
    updatedAt?: true;
  };

  export type ApplicationMaxAggregateInputType = {
    id?: true;
    candidateId?: true;
    jobId?: true;
    resumeUrl?: true;
    status?: true;
    coverLetter?: true;
    atsScore?: true;
    appliedAt?: true;
    updatedAt?: true;
  };

  export type ApplicationCountAggregateInputType = {
    id?: true;
    candidateId?: true;
    jobId?: true;
    resumeUrl?: true;
    status?: true;
    coverLetter?: true;
    atsScore?: true;
    appliedAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type ApplicationAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Application to aggregate.
     */
    where?: ApplicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Applications to fetch.
     */
    orderBy?:
      | ApplicationOrderByWithRelationInput
      | ApplicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ApplicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Applications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Applications
     **/
    _count?: true | ApplicationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ApplicationAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ApplicationSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ApplicationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ApplicationMaxAggregateInputType;
  };

  export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> =
    {
      [P in keyof T & keyof AggregateApplication]: P extends "_count" | "count"
        ? T[P] extends true
          ? number
          : GetScalarType<T[P], AggregateApplication[P]>
        : GetScalarType<T[P], AggregateApplication[P]>;
    };

  export type ApplicationGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ApplicationWhereInput;
    orderBy?:
      | ApplicationOrderByWithAggregationInput
      | ApplicationOrderByWithAggregationInput[];
    by: ApplicationScalarFieldEnum[] | ApplicationScalarFieldEnum;
    having?: ApplicationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ApplicationCountAggregateInputType | true;
    _avg?: ApplicationAvgAggregateInputType;
    _sum?: ApplicationSumAggregateInputType;
    _min?: ApplicationMinAggregateInputType;
    _max?: ApplicationMaxAggregateInputType;
  };

  export type ApplicationGroupByOutputType = {
    id: string;
    candidateId: string;
    jobId: string;
    resumeUrl: string | null;
    status: $Enums.ApplicationStatus;
    coverLetter: string | null;
    atsScore: number | null;
    appliedAt: Date;
    updatedAt: Date;
    _count: ApplicationCountAggregateOutputType | null;
    _avg: ApplicationAvgAggregateOutputType | null;
    _sum: ApplicationSumAggregateOutputType | null;
    _min: ApplicationMinAggregateOutputType | null;
    _max: ApplicationMaxAggregateOutputType | null;
  };

  type GetApplicationGroupByPayload<T extends ApplicationGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ApplicationGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof ApplicationGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationGroupByOutputType[P]>;
        }
      >
    >;

  export type ApplicationSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      candidateId?: boolean;
      jobId?: boolean;
      resumeUrl?: boolean;
      status?: boolean;
      coverLetter?: boolean;
      atsScore?: boolean;
      appliedAt?: boolean;
      updatedAt?: boolean;
      candidate?: boolean | UserDefaultArgs<ExtArgs>;
      job?: boolean | JobDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["application"]
  >;

  export type ApplicationSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      candidateId?: boolean;
      jobId?: boolean;
      resumeUrl?: boolean;
      status?: boolean;
      coverLetter?: boolean;
      atsScore?: boolean;
      appliedAt?: boolean;
      updatedAt?: boolean;
      candidate?: boolean | UserDefaultArgs<ExtArgs>;
      job?: boolean | JobDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["application"]
  >;

  export type ApplicationSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      candidateId?: boolean;
      jobId?: boolean;
      resumeUrl?: boolean;
      status?: boolean;
      coverLetter?: boolean;
      atsScore?: boolean;
      appliedAt?: boolean;
      updatedAt?: boolean;
      candidate?: boolean | UserDefaultArgs<ExtArgs>;
      job?: boolean | JobDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["application"]
  >;

  export type ApplicationSelectScalar = {
    id?: boolean;
    candidateId?: boolean;
    jobId?: boolean;
    resumeUrl?: boolean;
    status?: boolean;
    coverLetter?: boolean;
    atsScore?: boolean;
    appliedAt?: boolean;
    updatedAt?: boolean;
  };

  export type ApplicationOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "candidateId"
    | "jobId"
    | "resumeUrl"
    | "status"
    | "coverLetter"
    | "atsScore"
    | "appliedAt"
    | "updatedAt",
    ExtArgs["result"]["application"]
  >;
  export type ApplicationInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    candidate?: boolean | UserDefaultArgs<ExtArgs>;
    job?: boolean | JobDefaultArgs<ExtArgs>;
  };
  export type ApplicationIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    candidate?: boolean | UserDefaultArgs<ExtArgs>;
    job?: boolean | JobDefaultArgs<ExtArgs>;
  };
  export type ApplicationIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    candidate?: boolean | UserDefaultArgs<ExtArgs>;
    job?: boolean | JobDefaultArgs<ExtArgs>;
  };

  export type $ApplicationPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Application";
    objects: {
      candidate: Prisma.$UserPayload<ExtArgs>;
      job: Prisma.$JobPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        candidateId: string;
        jobId: string;
        resumeUrl: string | null;
        status: $Enums.ApplicationStatus;
        coverLetter: string | null;
        atsScore: number | null;
        appliedAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["application"]
    >;
    composites: {};
  };

  type ApplicationGetPayload<
    S extends boolean | null | undefined | ApplicationDefaultArgs,
  > = $Result.GetResult<Prisma.$ApplicationPayload, S>;

  type ApplicationCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    ApplicationFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: ApplicationCountAggregateInputType | true;
  };

  export interface ApplicationDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Application"];
      meta: { name: "Application" };
    };
    /**
     * Find zero or one Application that matches the filter.
     * @param {ApplicationFindUniqueArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationFindUniqueArgs>(
      args: SelectSubset<T, ApplicationFindUniqueArgs<ExtArgs>>,
    ): Prisma__ApplicationClient<
      $Result.GetResult<
        Prisma.$ApplicationPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Application that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationFindUniqueOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ApplicationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ApplicationClient<
      $Result.GetResult<
        Prisma.$ApplicationPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationFindFirstArgs>(
      args?: SelectSubset<T, ApplicationFindFirstArgs<ExtArgs>>,
    ): Prisma__ApplicationClient<
      $Result.GetResult<
        Prisma.$ApplicationPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Application that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ApplicationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ApplicationClient<
      $Result.GetResult<
        Prisma.$ApplicationPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.application.findMany()
     *
     * // Get first 10 Applications
     * const applications = await prisma.application.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const applicationWithIdOnly = await prisma.application.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ApplicationFindManyArgs>(
      args?: SelectSubset<T, ApplicationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ApplicationPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Application.
     * @param {ApplicationCreateArgs} args - Arguments to create a Application.
     * @example
     * // Create one Application
     * const Application = await prisma.application.create({
     *   data: {
     *     // ... data to create a Application
     *   }
     * })
     *
     */
    create<T extends ApplicationCreateArgs>(
      args: SelectSubset<T, ApplicationCreateArgs<ExtArgs>>,
    ): Prisma__ApplicationClient<
      $Result.GetResult<
        Prisma.$ApplicationPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Applications.
     * @param {ApplicationCreateManyArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ApplicationCreateManyArgs>(
      args?: SelectSubset<T, ApplicationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Applications and returns the data saved in the database.
     * @param {ApplicationCreateManyAndReturnArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ApplicationCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ApplicationCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ApplicationPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Application.
     * @param {ApplicationDeleteArgs} args - Arguments to delete one Application.
     * @example
     * // Delete one Application
     * const Application = await prisma.application.delete({
     *   where: {
     *     // ... filter to delete one Application
     *   }
     * })
     *
     */
    delete<T extends ApplicationDeleteArgs>(
      args: SelectSubset<T, ApplicationDeleteArgs<ExtArgs>>,
    ): Prisma__ApplicationClient<
      $Result.GetResult<
        Prisma.$ApplicationPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Application.
     * @param {ApplicationUpdateArgs} args - Arguments to update one Application.
     * @example
     * // Update one Application
     * const application = await prisma.application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ApplicationUpdateArgs>(
      args: SelectSubset<T, ApplicationUpdateArgs<ExtArgs>>,
    ): Prisma__ApplicationClient<
      $Result.GetResult<
        Prisma.$ApplicationPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Applications.
     * @param {ApplicationDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ApplicationDeleteManyArgs>(
      args?: SelectSubset<T, ApplicationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ApplicationUpdateManyArgs>(
      args: SelectSubset<T, ApplicationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Applications and returns the data updated in the database.
     * @param {ApplicationUpdateManyAndReturnArgs} args - Arguments to update many Applications.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ApplicationUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ApplicationUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ApplicationPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Application.
     * @param {ApplicationUpsertArgs} args - Arguments to update or create a Application.
     * @example
     * // Update or create a Application
     * const application = await prisma.application.upsert({
     *   create: {
     *     // ... data to create a Application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Application we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationUpsertArgs>(
      args: SelectSubset<T, ApplicationUpsertArgs<ExtArgs>>,
    ): Prisma__ApplicationClient<
      $Result.GetResult<
        Prisma.$ApplicationPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.application.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
     **/
    count<T extends ApplicationCountArgs>(
      args?: Subset<T, ApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], ApplicationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ApplicationAggregateArgs>(
      args: Subset<T, ApplicationAggregateArgs>,
    ): Prisma.PrismaPromise<GetApplicationAggregateType<T>>;

    /**
     * Group by Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationGroupByArgs["orderBy"] }
        : { orderBy?: ApplicationGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ApplicationGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetApplicationGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Application model
     */
    readonly fields: ApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    candidate<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    job<T extends JobDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, JobDefaultArgs<ExtArgs>>,
    ): Prisma__JobClient<
      | $Result.GetResult<
          Prisma.$JobPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Application model
   */
  interface ApplicationFieldRefs {
    readonly id: FieldRef<"Application", "String">;
    readonly candidateId: FieldRef<"Application", "String">;
    readonly jobId: FieldRef<"Application", "String">;
    readonly resumeUrl: FieldRef<"Application", "String">;
    readonly status: FieldRef<"Application", "ApplicationStatus">;
    readonly coverLetter: FieldRef<"Application", "String">;
    readonly atsScore: FieldRef<"Application", "Int">;
    readonly appliedAt: FieldRef<"Application", "DateTime">;
    readonly updatedAt: FieldRef<"Application", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Application findUnique
   */
  export type ApplicationFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null;
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput;
  };

  /**
   * Application findUniqueOrThrow
   */
  export type ApplicationFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null;
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput;
  };

  /**
   * Application findFirst
   */
  export type ApplicationFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null;
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Applications to fetch.
     */
    orderBy?:
      | ApplicationOrderByWithRelationInput
      | ApplicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Applications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[];
  };

  /**
   * Application findFirstOrThrow
   */
  export type ApplicationFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null;
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Applications to fetch.
     */
    orderBy?:
      | ApplicationOrderByWithRelationInput
      | ApplicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Applications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[];
  };

  /**
   * Application findMany
   */
  export type ApplicationFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null;
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Applications to fetch.
     */
    orderBy?:
      | ApplicationOrderByWithRelationInput
      | ApplicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Applications.
     */
    cursor?: ApplicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Applications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[];
  };

  /**
   * Application create
   */
  export type ApplicationCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null;
    /**
     * The data needed to create a Application.
     */
    data: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>;
  };

  /**
   * Application createMany
   */
  export type ApplicationCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Application createManyAndReturn
   */
  export type ApplicationCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null;
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Application update
   */
  export type ApplicationUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null;
    /**
     * The data needed to update a Application.
     */
    data: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>;
    /**
     * Choose, which Application to update.
     */
    where: ApplicationWhereUniqueInput;
  };

  /**
   * Application updateMany
   */
  export type ApplicationUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Applications.
     */
    data: XOR<
      ApplicationUpdateManyMutationInput,
      ApplicationUncheckedUpdateManyInput
    >;
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput;
    /**
     * Limit how many Applications to update.
     */
    limit?: number;
  };

  /**
   * Application updateManyAndReturn
   */
  export type ApplicationUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null;
    /**
     * The data used to update Applications.
     */
    data: XOR<
      ApplicationUpdateManyMutationInput,
      ApplicationUncheckedUpdateManyInput
    >;
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput;
    /**
     * Limit how many Applications to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Application upsert
   */
  export type ApplicationUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null;
    /**
     * The filter to search for the Application to update in case it exists.
     */
    where: ApplicationWhereUniqueInput;
    /**
     * In case the Application found by the `where` argument doesn't exist, create a new Application with this data.
     */
    create: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>;
    /**
     * In case the Application was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>;
  };

  /**
   * Application delete
   */
  export type ApplicationDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null;
    /**
     * Filter which Application to delete.
     */
    where: ApplicationWhereUniqueInput;
  };

  /**
   * Application deleteMany
   */
  export type ApplicationDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Applications to delete
     */
    where?: ApplicationWhereInput;
    /**
     * Limit how many Applications to delete.
     */
    limit?: number;
  };

  /**
   * Application without action
   */
  export type ApplicationDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null;
  };

  /**
   * Model Resume
   */

  export type AggregateResume = {
    _count: ResumeCountAggregateOutputType | null;
    _min: ResumeMinAggregateOutputType | null;
    _max: ResumeMaxAggregateOutputType | null;
  };

  export type ResumeMinAggregateOutputType = {
    id: string | null;
    candidateId: string | null;
    s3Key: string | null;
    fileName: string | null;
    parsedName: string | null;
    parsedEmail: string | null;
    rawText: string | null;
    parseStatus: $Enums.ParseStatus | null;
    uploadedAt: Date | null;
  };

  export type ResumeMaxAggregateOutputType = {
    id: string | null;
    candidateId: string | null;
    s3Key: string | null;
    fileName: string | null;
    parsedName: string | null;
    parsedEmail: string | null;
    rawText: string | null;
    parseStatus: $Enums.ParseStatus | null;
    uploadedAt: Date | null;
  };

  export type ResumeCountAggregateOutputType = {
    id: number;
    candidateId: number;
    s3Key: number;
    fileName: number;
    parsedName: number;
    parsedEmail: number;
    parsedSkills: number;
    rawText: number;
    parseStatus: number;
    uploadedAt: number;
    _all: number;
  };

  export type ResumeMinAggregateInputType = {
    id?: true;
    candidateId?: true;
    s3Key?: true;
    fileName?: true;
    parsedName?: true;
    parsedEmail?: true;
    rawText?: true;
    parseStatus?: true;
    uploadedAt?: true;
  };

  export type ResumeMaxAggregateInputType = {
    id?: true;
    candidateId?: true;
    s3Key?: true;
    fileName?: true;
    parsedName?: true;
    parsedEmail?: true;
    rawText?: true;
    parseStatus?: true;
    uploadedAt?: true;
  };

  export type ResumeCountAggregateInputType = {
    id?: true;
    candidateId?: true;
    s3Key?: true;
    fileName?: true;
    parsedName?: true;
    parsedEmail?: true;
    parsedSkills?: true;
    rawText?: true;
    parseStatus?: true;
    uploadedAt?: true;
    _all?: true;
  };

  export type ResumeAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Resume to aggregate.
     */
    where?: ResumeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ResumeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Resumes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Resumes
     **/
    _count?: true | ResumeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ResumeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ResumeMaxAggregateInputType;
  };

  export type GetResumeAggregateType<T extends ResumeAggregateArgs> = {
    [P in keyof T & keyof AggregateResume]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResume[P]>
      : GetScalarType<T[P], AggregateResume[P]>;
  };

  export type ResumeGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ResumeWhereInput;
    orderBy?:
      | ResumeOrderByWithAggregationInput
      | ResumeOrderByWithAggregationInput[];
    by: ResumeScalarFieldEnum[] | ResumeScalarFieldEnum;
    having?: ResumeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ResumeCountAggregateInputType | true;
    _min?: ResumeMinAggregateInputType;
    _max?: ResumeMaxAggregateInputType;
  };

  export type ResumeGroupByOutputType = {
    id: string;
    candidateId: string;
    s3Key: string;
    fileName: string | null;
    parsedName: string | null;
    parsedEmail: string | null;
    parsedSkills: string[];
    rawText: string | null;
    parseStatus: $Enums.ParseStatus;
    uploadedAt: Date;
    _count: ResumeCountAggregateOutputType | null;
    _min: ResumeMinAggregateOutputType | null;
    _max: ResumeMaxAggregateOutputType | null;
  };

  type GetResumeGroupByPayload<T extends ResumeGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ResumeGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof ResumeGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResumeGroupByOutputType[P]>
            : GetScalarType<T[P], ResumeGroupByOutputType[P]>;
        }
      >
    >;

  export type ResumeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      candidateId?: boolean;
      s3Key?: boolean;
      fileName?: boolean;
      parsedName?: boolean;
      parsedEmail?: boolean;
      parsedSkills?: boolean;
      rawText?: boolean;
      parseStatus?: boolean;
      uploadedAt?: boolean;
      candidate?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["resume"]
  >;

  export type ResumeSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      candidateId?: boolean;
      s3Key?: boolean;
      fileName?: boolean;
      parsedName?: boolean;
      parsedEmail?: boolean;
      parsedSkills?: boolean;
      rawText?: boolean;
      parseStatus?: boolean;
      uploadedAt?: boolean;
      candidate?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["resume"]
  >;

  export type ResumeSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      candidateId?: boolean;
      s3Key?: boolean;
      fileName?: boolean;
      parsedName?: boolean;
      parsedEmail?: boolean;
      parsedSkills?: boolean;
      rawText?: boolean;
      parseStatus?: boolean;
      uploadedAt?: boolean;
      candidate?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["resume"]
  >;

  export type ResumeSelectScalar = {
    id?: boolean;
    candidateId?: boolean;
    s3Key?: boolean;
    fileName?: boolean;
    parsedName?: boolean;
    parsedEmail?: boolean;
    parsedSkills?: boolean;
    rawText?: boolean;
    parseStatus?: boolean;
    uploadedAt?: boolean;
  };

  export type ResumeOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "candidateId"
    | "s3Key"
    | "fileName"
    | "parsedName"
    | "parsedEmail"
    | "parsedSkills"
    | "rawText"
    | "parseStatus"
    | "uploadedAt",
    ExtArgs["result"]["resume"]
  >;
  export type ResumeInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    candidate?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type ResumeIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    candidate?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type ResumeIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    candidate?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $ResumePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Resume";
    objects: {
      candidate: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        candidateId: string;
        s3Key: string;
        fileName: string | null;
        parsedName: string | null;
        parsedEmail: string | null;
        parsedSkills: string[];
        rawText: string | null;
        parseStatus: $Enums.ParseStatus;
        uploadedAt: Date;
      },
      ExtArgs["result"]["resume"]
    >;
    composites: {};
  };

  type ResumeGetPayload<
    S extends boolean | null | undefined | ResumeDefaultArgs,
  > = $Result.GetResult<Prisma.$ResumePayload, S>;

  type ResumeCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ResumeFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: ResumeCountAggregateInputType | true;
  };

  export interface ResumeDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Resume"];
      meta: { name: "Resume" };
    };
    /**
     * Find zero or one Resume that matches the filter.
     * @param {ResumeFindUniqueArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResumeFindUniqueArgs>(
      args: SelectSubset<T, ResumeFindUniqueArgs<ExtArgs>>,
    ): Prisma__ResumeClient<
      $Result.GetResult<
        Prisma.$ResumePayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Resume that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResumeFindUniqueOrThrowArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResumeFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ResumeFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ResumeClient<
      $Result.GetResult<
        Prisma.$ResumePayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Resume that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindFirstArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResumeFindFirstArgs>(
      args?: SelectSubset<T, ResumeFindFirstArgs<ExtArgs>>,
    ): Prisma__ResumeClient<
      $Result.GetResult<
        Prisma.$ResumePayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Resume that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindFirstOrThrowArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResumeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ResumeFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ResumeClient<
      $Result.GetResult<
        Prisma.$ResumePayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Resumes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resumes
     * const resumes = await prisma.resume.findMany()
     *
     * // Get first 10 Resumes
     * const resumes = await prisma.resume.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const resumeWithIdOnly = await prisma.resume.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ResumeFindManyArgs>(
      args?: SelectSubset<T, ResumeFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ResumePayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Resume.
     * @param {ResumeCreateArgs} args - Arguments to create a Resume.
     * @example
     * // Create one Resume
     * const Resume = await prisma.resume.create({
     *   data: {
     *     // ... data to create a Resume
     *   }
     * })
     *
     */
    create<T extends ResumeCreateArgs>(
      args: SelectSubset<T, ResumeCreateArgs<ExtArgs>>,
    ): Prisma__ResumeClient<
      $Result.GetResult<
        Prisma.$ResumePayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Resumes.
     * @param {ResumeCreateManyArgs} args - Arguments to create many Resumes.
     * @example
     * // Create many Resumes
     * const resume = await prisma.resume.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ResumeCreateManyArgs>(
      args?: SelectSubset<T, ResumeCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Resumes and returns the data saved in the database.
     * @param {ResumeCreateManyAndReturnArgs} args - Arguments to create many Resumes.
     * @example
     * // Create many Resumes
     * const resume = await prisma.resume.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Resumes and only return the `id`
     * const resumeWithIdOnly = await prisma.resume.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ResumeCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ResumeCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ResumePayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Resume.
     * @param {ResumeDeleteArgs} args - Arguments to delete one Resume.
     * @example
     * // Delete one Resume
     * const Resume = await prisma.resume.delete({
     *   where: {
     *     // ... filter to delete one Resume
     *   }
     * })
     *
     */
    delete<T extends ResumeDeleteArgs>(
      args: SelectSubset<T, ResumeDeleteArgs<ExtArgs>>,
    ): Prisma__ResumeClient<
      $Result.GetResult<
        Prisma.$ResumePayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Resume.
     * @param {ResumeUpdateArgs} args - Arguments to update one Resume.
     * @example
     * // Update one Resume
     * const resume = await prisma.resume.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ResumeUpdateArgs>(
      args: SelectSubset<T, ResumeUpdateArgs<ExtArgs>>,
    ): Prisma__ResumeClient<
      $Result.GetResult<
        Prisma.$ResumePayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Resumes.
     * @param {ResumeDeleteManyArgs} args - Arguments to filter Resumes to delete.
     * @example
     * // Delete a few Resumes
     * const { count } = await prisma.resume.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ResumeDeleteManyArgs>(
      args?: SelectSubset<T, ResumeDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resumes
     * const resume = await prisma.resume.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ResumeUpdateManyArgs>(
      args: SelectSubset<T, ResumeUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Resumes and returns the data updated in the database.
     * @param {ResumeUpdateManyAndReturnArgs} args - Arguments to update many Resumes.
     * @example
     * // Update many Resumes
     * const resume = await prisma.resume.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Resumes and only return the `id`
     * const resumeWithIdOnly = await prisma.resume.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ResumeUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ResumeUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ResumePayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Resume.
     * @param {ResumeUpsertArgs} args - Arguments to update or create a Resume.
     * @example
     * // Update or create a Resume
     * const resume = await prisma.resume.upsert({
     *   create: {
     *     // ... data to create a Resume
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resume we want to update
     *   }
     * })
     */
    upsert<T extends ResumeUpsertArgs>(
      args: SelectSubset<T, ResumeUpsertArgs<ExtArgs>>,
    ): Prisma__ResumeClient<
      $Result.GetResult<
        Prisma.$ResumePayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeCountArgs} args - Arguments to filter Resumes to count.
     * @example
     * // Count the number of Resumes
     * const count = await prisma.resume.count({
     *   where: {
     *     // ... the filter for the Resumes we want to count
     *   }
     * })
     **/
    count<T extends ResumeCountArgs>(
      args?: Subset<T, ResumeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], ResumeCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Resume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ResumeAggregateArgs>(
      args: Subset<T, ResumeAggregateArgs>,
    ): Prisma.PrismaPromise<GetResumeAggregateType<T>>;

    /**
     * Group by Resume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ResumeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResumeGroupByArgs["orderBy"] }
        : { orderBy?: ResumeGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ResumeGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetResumeGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Resume model
     */
    readonly fields: ResumeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resume.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResumeClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    candidate<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Resume model
   */
  interface ResumeFieldRefs {
    readonly id: FieldRef<"Resume", "String">;
    readonly candidateId: FieldRef<"Resume", "String">;
    readonly s3Key: FieldRef<"Resume", "String">;
    readonly fileName: FieldRef<"Resume", "String">;
    readonly parsedName: FieldRef<"Resume", "String">;
    readonly parsedEmail: FieldRef<"Resume", "String">;
    readonly parsedSkills: FieldRef<"Resume", "String[]">;
    readonly rawText: FieldRef<"Resume", "String">;
    readonly parseStatus: FieldRef<"Resume", "ParseStatus">;
    readonly uploadedAt: FieldRef<"Resume", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Resume findUnique
   */
  export type ResumeFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null;
    /**
     * Filter, which Resume to fetch.
     */
    where: ResumeWhereUniqueInput;
  };

  /**
   * Resume findUniqueOrThrow
   */
  export type ResumeFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null;
    /**
     * Filter, which Resume to fetch.
     */
    where: ResumeWhereUniqueInput;
  };

  /**
   * Resume findFirst
   */
  export type ResumeFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null;
    /**
     * Filter, which Resume to fetch.
     */
    where?: ResumeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Resumes.
     */
    cursor?: ResumeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Resumes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Resumes.
     */
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[];
  };

  /**
   * Resume findFirstOrThrow
   */
  export type ResumeFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null;
    /**
     * Filter, which Resume to fetch.
     */
    where?: ResumeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Resumes.
     */
    cursor?: ResumeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Resumes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Resumes.
     */
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[];
  };

  /**
   * Resume findMany
   */
  export type ResumeFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null;
    /**
     * Filter, which Resumes to fetch.
     */
    where?: ResumeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Resumes.
     */
    cursor?: ResumeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Resumes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Resumes.
     */
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[];
  };

  /**
   * Resume create
   */
  export type ResumeCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null;
    /**
     * The data needed to create a Resume.
     */
    data: XOR<ResumeCreateInput, ResumeUncheckedCreateInput>;
  };

  /**
   * Resume createMany
   */
  export type ResumeCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Resumes.
     */
    data: ResumeCreateManyInput | ResumeCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Resume createManyAndReturn
   */
  export type ResumeCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null;
    /**
     * The data used to create many Resumes.
     */
    data: ResumeCreateManyInput | ResumeCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Resume update
   */
  export type ResumeUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null;
    /**
     * The data needed to update a Resume.
     */
    data: XOR<ResumeUpdateInput, ResumeUncheckedUpdateInput>;
    /**
     * Choose, which Resume to update.
     */
    where: ResumeWhereUniqueInput;
  };

  /**
   * Resume updateMany
   */
  export type ResumeUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Resumes.
     */
    data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyInput>;
    /**
     * Filter which Resumes to update
     */
    where?: ResumeWhereInput;
    /**
     * Limit how many Resumes to update.
     */
    limit?: number;
  };

  /**
   * Resume updateManyAndReturn
   */
  export type ResumeUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null;
    /**
     * The data used to update Resumes.
     */
    data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyInput>;
    /**
     * Filter which Resumes to update
     */
    where?: ResumeWhereInput;
    /**
     * Limit how many Resumes to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Resume upsert
   */
  export type ResumeUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null;
    /**
     * The filter to search for the Resume to update in case it exists.
     */
    where: ResumeWhereUniqueInput;
    /**
     * In case the Resume found by the `where` argument doesn't exist, create a new Resume with this data.
     */
    create: XOR<ResumeCreateInput, ResumeUncheckedCreateInput>;
    /**
     * In case the Resume was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResumeUpdateInput, ResumeUncheckedUpdateInput>;
  };

  /**
   * Resume delete
   */
  export type ResumeDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null;
    /**
     * Filter which Resume to delete.
     */
    where: ResumeWhereUniqueInput;
  };

  /**
   * Resume deleteMany
   */
  export type ResumeDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Resumes to delete
     */
    where?: ResumeWhereInput;
    /**
     * Limit how many Resumes to delete.
     */
    limit?: number;
  };

  /**
   * Resume without action
   */
  export type ResumeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null;
  };

  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null;
    _min: NotificationMinAggregateOutputType | null;
    _max: NotificationMaxAggregateOutputType | null;
  };

  export type NotificationMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    type: $Enums.NotificationType | null;
    sent: boolean | null;
    createdAt: Date | null;
  };

  export type NotificationMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    type: $Enums.NotificationType | null;
    sent: boolean | null;
    createdAt: Date | null;
  };

  export type NotificationCountAggregateOutputType = {
    id: number;
    userId: number;
    type: number;
    payload: number;
    sent: number;
    createdAt: number;
    _all: number;
  };

  export type NotificationMinAggregateInputType = {
    id?: true;
    userId?: true;
    type?: true;
    sent?: true;
    createdAt?: true;
  };

  export type NotificationMaxAggregateInputType = {
    id?: true;
    userId?: true;
    type?: true;
    sent?: true;
    createdAt?: true;
  };

  export type NotificationCountAggregateInputType = {
    id?: true;
    userId?: true;
    type?: true;
    payload?: true;
    sent?: true;
    createdAt?: true;
    _all?: true;
  };

  export type NotificationAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Notifications to fetch.
     */
    orderBy?:
      | NotificationOrderByWithRelationInput
      | NotificationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Notifications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Notifications
     **/
    _count?: true | NotificationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: NotificationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: NotificationMaxAggregateInputType;
  };

  export type GetNotificationAggregateType<
    T extends NotificationAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateNotification]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>;
  };

  export type NotificationGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: NotificationWhereInput;
    orderBy?:
      | NotificationOrderByWithAggregationInput
      | NotificationOrderByWithAggregationInput[];
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum;
    having?: NotificationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NotificationCountAggregateInputType | true;
    _min?: NotificationMinAggregateInputType;
    _max?: NotificationMaxAggregateInputType;
  };

  export type NotificationGroupByOutputType = {
    id: string;
    userId: string;
    type: $Enums.NotificationType;
    payload: JsonValue;
    sent: boolean;
    createdAt: Date;
    _count: NotificationCountAggregateOutputType | null;
    _min: NotificationMinAggregateOutputType | null;
    _max: NotificationMaxAggregateOutputType | null;
  };

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<NotificationGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof NotificationGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>;
        }
      >
    >;

  export type NotificationSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      type?: boolean;
      payload?: boolean;
      sent?: boolean;
      createdAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["notification"]
  >;

  export type NotificationSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      type?: boolean;
      payload?: boolean;
      sent?: boolean;
      createdAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["notification"]
  >;

  export type NotificationSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      type?: boolean;
      payload?: boolean;
      sent?: boolean;
      createdAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["notification"]
  >;

  export type NotificationSelectScalar = {
    id?: boolean;
    userId?: boolean;
    type?: boolean;
    payload?: boolean;
    sent?: boolean;
    createdAt?: boolean;
  };

  export type NotificationOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "userId" | "type" | "payload" | "sent" | "createdAt",
    ExtArgs["result"]["notification"]
  >;
  export type NotificationInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type NotificationIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type NotificationIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $NotificationPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Notification";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        type: $Enums.NotificationType;
        payload: Prisma.JsonValue;
        sent: boolean;
        createdAt: Date;
      },
      ExtArgs["result"]["notification"]
    >;
    composites: {};
  };

  type NotificationGetPayload<
    S extends boolean | null | undefined | NotificationDefaultArgs,
  > = $Result.GetResult<Prisma.$NotificationPayload, S>;

  type NotificationCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    NotificationFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: NotificationCountAggregateInputType | true;
  };

  export interface NotificationDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Notification"];
      meta: { name: "Notification" };
    };
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(
      args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>,
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(
      args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(
      args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>,
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     *
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     *
     */
    findMany<T extends NotificationFindManyArgs>(
      args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     *
     */
    create<T extends NotificationCreateArgs>(
      args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>,
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends NotificationCreateManyArgs>(
      args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(
      args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     *
     */
    delete<T extends NotificationDeleteArgs>(
      args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>,
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends NotificationUpdateArgs>(
      args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>,
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends NotificationDeleteManyArgs>(
      args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends NotificationUpdateManyArgs>(
      args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(
      args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(
      args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>,
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
     **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], NotificationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends NotificationAggregateArgs>(
      args: Subset<T, NotificationAggregateArgs>,
    ): Prisma.PrismaPromise<GetNotificationAggregateType<T>>;

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs["orderBy"] }
        : { orderBy?: NotificationGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetNotificationGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Notification model
     */
    readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", "String">;
    readonly userId: FieldRef<"Notification", "String">;
    readonly type: FieldRef<"Notification", "NotificationType">;
    readonly payload: FieldRef<"Notification", "Json">;
    readonly sent: FieldRef<"Notification", "Boolean">;
    readonly createdAt: FieldRef<"Notification", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null;
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput;
  };

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null;
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput;
  };

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null;
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Notifications to fetch.
     */
    orderBy?:
      | NotificationOrderByWithRelationInput
      | NotificationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Notifications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[];
  };

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null;
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Notifications to fetch.
     */
    orderBy?:
      | NotificationOrderByWithRelationInput
      | NotificationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Notifications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[];
  };

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null;
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Notifications to fetch.
     */
    orderBy?:
      | NotificationOrderByWithRelationInput
      | NotificationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Notifications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[];
  };

  /**
   * Notification create
   */
  export type NotificationCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null;
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>;
  };

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null;
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>;
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput;
  };

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<
      NotificationUpdateManyMutationInput,
      NotificationUncheckedUpdateManyInput
    >;
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput;
    /**
     * Limit how many Notifications to update.
     */
    limit?: number;
  };

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * The data used to update Notifications.
     */
    data: XOR<
      NotificationUpdateManyMutationInput,
      NotificationUncheckedUpdateManyInput
    >;
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput;
    /**
     * Limit how many Notifications to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null;
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput;
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>;
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>;
  };

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null;
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput;
  };

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput;
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number;
  };

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: "ReadUncommitted";
    ReadCommitted: "ReadCommitted";
    RepeatableRead: "RepeatableRead";
    Serializable: "Serializable";
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum: {
    id: "id";
    name: "name";
    email: "email";
    passwordHash: "passwordHash";
    role: "role";
    isVerified: "isVerified";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const RefreshTokenScalarFieldEnum: {
    id: "id";
    userId: "userId";
    token: "token";
    expiresAt: "expiresAt";
    createdAt: "createdAt";
  };

  export type RefreshTokenScalarFieldEnum =
    (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum];

  export const JobScalarFieldEnum: {
    id: "id";
    recruiterId: "recruiterId";
    title: "title";
    description: "description";
    location: "location";
    jobType: "jobType";
    salaryMin: "salaryMin";
    salaryMax: "salaryMax";
    skillsRequired: "skillsRequired";
    status: "status";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type JobScalarFieldEnum =
    (typeof JobScalarFieldEnum)[keyof typeof JobScalarFieldEnum];

  export const ApplicationScalarFieldEnum: {
    id: "id";
    candidateId: "candidateId";
    jobId: "jobId";
    resumeUrl: "resumeUrl";
    status: "status";
    coverLetter: "coverLetter";
    atsScore: "atsScore";
    appliedAt: "appliedAt";
    updatedAt: "updatedAt";
  };

  export type ApplicationScalarFieldEnum =
    (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum];

  export const ResumeScalarFieldEnum: {
    id: "id";
    candidateId: "candidateId";
    s3Key: "s3Key";
    fileName: "fileName";
    parsedName: "parsedName";
    parsedEmail: "parsedEmail";
    parsedSkills: "parsedSkills";
    rawText: "rawText";
    parseStatus: "parseStatus";
    uploadedAt: "uploadedAt";
  };

  export type ResumeScalarFieldEnum =
    (typeof ResumeScalarFieldEnum)[keyof typeof ResumeScalarFieldEnum];

  export const NotificationScalarFieldEnum: {
    id: "id";
    userId: "userId";
    type: "type";
    payload: "payload";
    sent: "sent";
    createdAt: "createdAt";
  };

  export type NotificationScalarFieldEnum =
    (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];

  export const SortOrder: {
    asc: "asc";
    desc: "desc";
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull;
  };

  export type JsonNullValueInput =
    (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];

  export const QueryMode: {
    default: "default";
    insensitive: "insensitive";
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: "first";
    last: "last";
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  export const JsonNullValueFilter: {
    DbNull: typeof DbNull;
    JsonNull: typeof JsonNull;
    AnyNull: typeof AnyNull;
  };

  export type JsonNullValueFilter =
    (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String"
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String[]"
  >;

  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Role"
  >;

  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Role[]"
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Boolean"
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime"
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime[]"
  >;

  /**
   * Reference to a field of type 'JobType'
   */
  export type EnumJobTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "JobType"
  >;

  /**
   * Reference to a field of type 'JobType[]'
   */
  export type ListEnumJobTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "JobType[]"
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int"
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int[]"
  >;

  /**
   * Reference to a field of type 'JobStatus'
   */
  export type EnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "JobStatus"
  >;

  /**
   * Reference to a field of type 'JobStatus[]'
   */
  export type ListEnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "JobStatus[]"
  >;

  /**
   * Reference to a field of type 'ApplicationStatus'
   */
  export type EnumApplicationStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, "ApplicationStatus">;

  /**
   * Reference to a field of type 'ApplicationStatus[]'
   */
  export type ListEnumApplicationStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, "ApplicationStatus[]">;

  /**
   * Reference to a field of type 'ParseStatus'
   */
  export type EnumParseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "ParseStatus"
  >;

  /**
   * Reference to a field of type 'ParseStatus[]'
   */
  export type ListEnumParseStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, "ParseStatus[]">;

  /**
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, "NotificationType">;

  /**
   * Reference to a field of type 'NotificationType[]'
   */
  export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, "NotificationType[]">;

  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Json"
  >;

  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "QueryMode"
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float"
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float[]"
  >;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: StringFilter<"User"> | string;
    name?: StringFilter<"User"> | string;
    email?: StringFilter<"User"> | string;
    passwordHash?: StringFilter<"User"> | string;
    role?: EnumRoleFilter<"User"> | $Enums.Role;
    isVerified?: BoolFilter<"User"> | boolean;
    createdAt?: DateTimeFilter<"User"> | Date | string;
    updatedAt?: DateTimeFilter<"User"> | Date | string;
    jobs?: JobListRelationFilter;
    applications?: ApplicationListRelationFilter;
    resumes?: ResumeListRelationFilter;
    refreshTokens?: RefreshTokenListRelationFilter;
    notifications?: NotificationListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    passwordHash?: SortOrder;
    role?: SortOrder;
    isVerified?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    jobs?: JobOrderByRelationAggregateInput;
    applications?: ApplicationOrderByRelationAggregateInput;
    resumes?: ResumeOrderByRelationAggregateInput;
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput;
    notifications?: NotificationOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      name?: StringFilter<"User"> | string;
      passwordHash?: StringFilter<"User"> | string;
      role?: EnumRoleFilter<"User"> | $Enums.Role;
      isVerified?: BoolFilter<"User"> | boolean;
      createdAt?: DateTimeFilter<"User"> | Date | string;
      updatedAt?: DateTimeFilter<"User"> | Date | string;
      jobs?: JobListRelationFilter;
      applications?: ApplicationListRelationFilter;
      resumes?: ResumeListRelationFilter;
      refreshTokens?: RefreshTokenListRelationFilter;
      notifications?: NotificationListRelationFilter;
    },
    "id" | "email"
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    passwordHash?: SortOrder;
    role?: SortOrder;
    isVerified?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"User"> | string;
    name?: StringWithAggregatesFilter<"User"> | string;
    email?: StringWithAggregatesFilter<"User"> | string;
    passwordHash?: StringWithAggregatesFilter<"User"> | string;
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role;
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean;
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string;
  };

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[];
    OR?: RefreshTokenWhereInput[];
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[];
    id?: StringFilter<"RefreshToken"> | string;
    userId?: StringFilter<"RefreshToken"> | string;
    token?: StringFilter<"RefreshToken"> | string;
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string;
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    token?: SortOrder;
    expiresAt?: SortOrder;
    createdAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      token?: string;
      AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[];
      OR?: RefreshTokenWhereInput[];
      NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[];
      userId?: StringFilter<"RefreshToken"> | string;
      expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string;
      createdAt?: DateTimeFilter<"RefreshToken"> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    "id" | "token"
  >;

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    token?: SortOrder;
    expiresAt?: SortOrder;
    createdAt?: SortOrder;
    _count?: RefreshTokenCountOrderByAggregateInput;
    _max?: RefreshTokenMaxOrderByAggregateInput;
    _min?: RefreshTokenMinOrderByAggregateInput;
  };

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?:
      | RefreshTokenScalarWhereWithAggregatesInput
      | RefreshTokenScalarWhereWithAggregatesInput[];
    OR?: RefreshTokenScalarWhereWithAggregatesInput[];
    NOT?:
      | RefreshTokenScalarWhereWithAggregatesInput
      | RefreshTokenScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"RefreshToken"> | string;
    userId?: StringWithAggregatesFilter<"RefreshToken"> | string;
    token?: StringWithAggregatesFilter<"RefreshToken"> | string;
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string;
    createdAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string;
  };

  export type JobWhereInput = {
    AND?: JobWhereInput | JobWhereInput[];
    OR?: JobWhereInput[];
    NOT?: JobWhereInput | JobWhereInput[];
    id?: StringFilter<"Job"> | string;
    recruiterId?: StringFilter<"Job"> | string;
    title?: StringFilter<"Job"> | string;
    description?: StringFilter<"Job"> | string;
    location?: StringNullableFilter<"Job"> | string | null;
    jobType?: EnumJobTypeFilter<"Job"> | $Enums.JobType;
    salaryMin?: IntNullableFilter<"Job"> | number | null;
    salaryMax?: IntNullableFilter<"Job"> | number | null;
    skillsRequired?: StringNullableListFilter<"Job">;
    status?: EnumJobStatusFilter<"Job"> | $Enums.JobStatus;
    createdAt?: DateTimeFilter<"Job"> | Date | string;
    updatedAt?: DateTimeFilter<"Job"> | Date | string;
    recruiter?: XOR<UserScalarRelationFilter, UserWhereInput>;
    applications?: ApplicationListRelationFilter;
  };

  export type JobOrderByWithRelationInput = {
    id?: SortOrder;
    recruiterId?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    location?: SortOrderInput | SortOrder;
    jobType?: SortOrder;
    salaryMin?: SortOrderInput | SortOrder;
    salaryMax?: SortOrderInput | SortOrder;
    skillsRequired?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    recruiter?: UserOrderByWithRelationInput;
    applications?: ApplicationOrderByRelationAggregateInput;
  };

  export type JobWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: JobWhereInput | JobWhereInput[];
      OR?: JobWhereInput[];
      NOT?: JobWhereInput | JobWhereInput[];
      recruiterId?: StringFilter<"Job"> | string;
      title?: StringFilter<"Job"> | string;
      description?: StringFilter<"Job"> | string;
      location?: StringNullableFilter<"Job"> | string | null;
      jobType?: EnumJobTypeFilter<"Job"> | $Enums.JobType;
      salaryMin?: IntNullableFilter<"Job"> | number | null;
      salaryMax?: IntNullableFilter<"Job"> | number | null;
      skillsRequired?: StringNullableListFilter<"Job">;
      status?: EnumJobStatusFilter<"Job"> | $Enums.JobStatus;
      createdAt?: DateTimeFilter<"Job"> | Date | string;
      updatedAt?: DateTimeFilter<"Job"> | Date | string;
      recruiter?: XOR<UserScalarRelationFilter, UserWhereInput>;
      applications?: ApplicationListRelationFilter;
    },
    "id"
  >;

  export type JobOrderByWithAggregationInput = {
    id?: SortOrder;
    recruiterId?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    location?: SortOrderInput | SortOrder;
    jobType?: SortOrder;
    salaryMin?: SortOrderInput | SortOrder;
    salaryMax?: SortOrderInput | SortOrder;
    skillsRequired?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: JobCountOrderByAggregateInput;
    _avg?: JobAvgOrderByAggregateInput;
    _max?: JobMaxOrderByAggregateInput;
    _min?: JobMinOrderByAggregateInput;
    _sum?: JobSumOrderByAggregateInput;
  };

  export type JobScalarWhereWithAggregatesInput = {
    AND?:
      | JobScalarWhereWithAggregatesInput
      | JobScalarWhereWithAggregatesInput[];
    OR?: JobScalarWhereWithAggregatesInput[];
    NOT?:
      | JobScalarWhereWithAggregatesInput
      | JobScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Job"> | string;
    recruiterId?: StringWithAggregatesFilter<"Job"> | string;
    title?: StringWithAggregatesFilter<"Job"> | string;
    description?: StringWithAggregatesFilter<"Job"> | string;
    location?: StringNullableWithAggregatesFilter<"Job"> | string | null;
    jobType?: EnumJobTypeWithAggregatesFilter<"Job"> | $Enums.JobType;
    salaryMin?: IntNullableWithAggregatesFilter<"Job"> | number | null;
    salaryMax?: IntNullableWithAggregatesFilter<"Job"> | number | null;
    skillsRequired?: StringNullableListFilter<"Job">;
    status?: EnumJobStatusWithAggregatesFilter<"Job"> | $Enums.JobStatus;
    createdAt?: DateTimeWithAggregatesFilter<"Job"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Job"> | Date | string;
  };

  export type ApplicationWhereInput = {
    AND?: ApplicationWhereInput | ApplicationWhereInput[];
    OR?: ApplicationWhereInput[];
    NOT?: ApplicationWhereInput | ApplicationWhereInput[];
    id?: StringFilter<"Application"> | string;
    candidateId?: StringFilter<"Application"> | string;
    jobId?: StringFilter<"Application"> | string;
    resumeUrl?: StringNullableFilter<"Application"> | string | null;
    status?:
      | EnumApplicationStatusFilter<"Application">
      | $Enums.ApplicationStatus;
    coverLetter?: StringNullableFilter<"Application"> | string | null;
    atsScore?: IntNullableFilter<"Application"> | number | null;
    appliedAt?: DateTimeFilter<"Application"> | Date | string;
    updatedAt?: DateTimeFilter<"Application"> | Date | string;
    candidate?: XOR<UserScalarRelationFilter, UserWhereInput>;
    job?: XOR<JobScalarRelationFilter, JobWhereInput>;
  };

  export type ApplicationOrderByWithRelationInput = {
    id?: SortOrder;
    candidateId?: SortOrder;
    jobId?: SortOrder;
    resumeUrl?: SortOrderInput | SortOrder;
    status?: SortOrder;
    coverLetter?: SortOrderInput | SortOrder;
    atsScore?: SortOrderInput | SortOrder;
    appliedAt?: SortOrder;
    updatedAt?: SortOrder;
    candidate?: UserOrderByWithRelationInput;
    job?: JobOrderByWithRelationInput;
  };

  export type ApplicationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      candidateId_jobId?: ApplicationCandidateIdJobIdCompoundUniqueInput;
      AND?: ApplicationWhereInput | ApplicationWhereInput[];
      OR?: ApplicationWhereInput[];
      NOT?: ApplicationWhereInput | ApplicationWhereInput[];
      candidateId?: StringFilter<"Application"> | string;
      jobId?: StringFilter<"Application"> | string;
      resumeUrl?: StringNullableFilter<"Application"> | string | null;
      status?:
        | EnumApplicationStatusFilter<"Application">
        | $Enums.ApplicationStatus;
      coverLetter?: StringNullableFilter<"Application"> | string | null;
      atsScore?: IntNullableFilter<"Application"> | number | null;
      appliedAt?: DateTimeFilter<"Application"> | Date | string;
      updatedAt?: DateTimeFilter<"Application"> | Date | string;
      candidate?: XOR<UserScalarRelationFilter, UserWhereInput>;
      job?: XOR<JobScalarRelationFilter, JobWhereInput>;
    },
    "id" | "candidateId_jobId"
  >;

  export type ApplicationOrderByWithAggregationInput = {
    id?: SortOrder;
    candidateId?: SortOrder;
    jobId?: SortOrder;
    resumeUrl?: SortOrderInput | SortOrder;
    status?: SortOrder;
    coverLetter?: SortOrderInput | SortOrder;
    atsScore?: SortOrderInput | SortOrder;
    appliedAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: ApplicationCountOrderByAggregateInput;
    _avg?: ApplicationAvgOrderByAggregateInput;
    _max?: ApplicationMaxOrderByAggregateInput;
    _min?: ApplicationMinOrderByAggregateInput;
    _sum?: ApplicationSumOrderByAggregateInput;
  };

  export type ApplicationScalarWhereWithAggregatesInput = {
    AND?:
      | ApplicationScalarWhereWithAggregatesInput
      | ApplicationScalarWhereWithAggregatesInput[];
    OR?: ApplicationScalarWhereWithAggregatesInput[];
    NOT?:
      | ApplicationScalarWhereWithAggregatesInput
      | ApplicationScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Application"> | string;
    candidateId?: StringWithAggregatesFilter<"Application"> | string;
    jobId?: StringWithAggregatesFilter<"Application"> | string;
    resumeUrl?:
      | StringNullableWithAggregatesFilter<"Application">
      | string
      | null;
    status?:
      | EnumApplicationStatusWithAggregatesFilter<"Application">
      | $Enums.ApplicationStatus;
    coverLetter?:
      | StringNullableWithAggregatesFilter<"Application">
      | string
      | null;
    atsScore?: IntNullableWithAggregatesFilter<"Application"> | number | null;
    appliedAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string;
  };

  export type ResumeWhereInput = {
    AND?: ResumeWhereInput | ResumeWhereInput[];
    OR?: ResumeWhereInput[];
    NOT?: ResumeWhereInput | ResumeWhereInput[];
    id?: StringFilter<"Resume"> | string;
    candidateId?: StringFilter<"Resume"> | string;
    s3Key?: StringFilter<"Resume"> | string;
    fileName?: StringNullableFilter<"Resume"> | string | null;
    parsedName?: StringNullableFilter<"Resume"> | string | null;
    parsedEmail?: StringNullableFilter<"Resume"> | string | null;
    parsedSkills?: StringNullableListFilter<"Resume">;
    rawText?: StringNullableFilter<"Resume"> | string | null;
    parseStatus?: EnumParseStatusFilter<"Resume"> | $Enums.ParseStatus;
    uploadedAt?: DateTimeFilter<"Resume"> | Date | string;
    candidate?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type ResumeOrderByWithRelationInput = {
    id?: SortOrder;
    candidateId?: SortOrder;
    s3Key?: SortOrder;
    fileName?: SortOrderInput | SortOrder;
    parsedName?: SortOrderInput | SortOrder;
    parsedEmail?: SortOrderInput | SortOrder;
    parsedSkills?: SortOrder;
    rawText?: SortOrderInput | SortOrder;
    parseStatus?: SortOrder;
    uploadedAt?: SortOrder;
    candidate?: UserOrderByWithRelationInput;
  };

  export type ResumeWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ResumeWhereInput | ResumeWhereInput[];
      OR?: ResumeWhereInput[];
      NOT?: ResumeWhereInput | ResumeWhereInput[];
      candidateId?: StringFilter<"Resume"> | string;
      s3Key?: StringFilter<"Resume"> | string;
      fileName?: StringNullableFilter<"Resume"> | string | null;
      parsedName?: StringNullableFilter<"Resume"> | string | null;
      parsedEmail?: StringNullableFilter<"Resume"> | string | null;
      parsedSkills?: StringNullableListFilter<"Resume">;
      rawText?: StringNullableFilter<"Resume"> | string | null;
      parseStatus?: EnumParseStatusFilter<"Resume"> | $Enums.ParseStatus;
      uploadedAt?: DateTimeFilter<"Resume"> | Date | string;
      candidate?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    "id"
  >;

  export type ResumeOrderByWithAggregationInput = {
    id?: SortOrder;
    candidateId?: SortOrder;
    s3Key?: SortOrder;
    fileName?: SortOrderInput | SortOrder;
    parsedName?: SortOrderInput | SortOrder;
    parsedEmail?: SortOrderInput | SortOrder;
    parsedSkills?: SortOrder;
    rawText?: SortOrderInput | SortOrder;
    parseStatus?: SortOrder;
    uploadedAt?: SortOrder;
    _count?: ResumeCountOrderByAggregateInput;
    _max?: ResumeMaxOrderByAggregateInput;
    _min?: ResumeMinOrderByAggregateInput;
  };

  export type ResumeScalarWhereWithAggregatesInput = {
    AND?:
      | ResumeScalarWhereWithAggregatesInput
      | ResumeScalarWhereWithAggregatesInput[];
    OR?: ResumeScalarWhereWithAggregatesInput[];
    NOT?:
      | ResumeScalarWhereWithAggregatesInput
      | ResumeScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Resume"> | string;
    candidateId?: StringWithAggregatesFilter<"Resume"> | string;
    s3Key?: StringWithAggregatesFilter<"Resume"> | string;
    fileName?: StringNullableWithAggregatesFilter<"Resume"> | string | null;
    parsedName?: StringNullableWithAggregatesFilter<"Resume"> | string | null;
    parsedEmail?: StringNullableWithAggregatesFilter<"Resume"> | string | null;
    parsedSkills?: StringNullableListFilter<"Resume">;
    rawText?: StringNullableWithAggregatesFilter<"Resume"> | string | null;
    parseStatus?:
      | EnumParseStatusWithAggregatesFilter<"Resume">
      | $Enums.ParseStatus;
    uploadedAt?: DateTimeWithAggregatesFilter<"Resume"> | Date | string;
  };

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[];
    OR?: NotificationWhereInput[];
    NOT?: NotificationWhereInput | NotificationWhereInput[];
    id?: StringFilter<"Notification"> | string;
    userId?: StringFilter<"Notification"> | string;
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType;
    payload?: JsonFilter<"Notification">;
    sent?: BoolFilter<"Notification"> | boolean;
    createdAt?: DateTimeFilter<"Notification"> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    type?: SortOrder;
    payload?: SortOrder;
    sent?: SortOrder;
    createdAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type NotificationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: NotificationWhereInput | NotificationWhereInput[];
      OR?: NotificationWhereInput[];
      NOT?: NotificationWhereInput | NotificationWhereInput[];
      userId?: StringFilter<"Notification"> | string;
      type?:
        | EnumNotificationTypeFilter<"Notification">
        | $Enums.NotificationType;
      payload?: JsonFilter<"Notification">;
      sent?: BoolFilter<"Notification"> | boolean;
      createdAt?: DateTimeFilter<"Notification"> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    "id"
  >;

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    type?: SortOrder;
    payload?: SortOrder;
    sent?: SortOrder;
    createdAt?: SortOrder;
    _count?: NotificationCountOrderByAggregateInput;
    _max?: NotificationMaxOrderByAggregateInput;
    _min?: NotificationMinOrderByAggregateInput;
  };

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?:
      | NotificationScalarWhereWithAggregatesInput
      | NotificationScalarWhereWithAggregatesInput[];
    OR?: NotificationScalarWhereWithAggregatesInput[];
    NOT?:
      | NotificationScalarWhereWithAggregatesInput
      | NotificationScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Notification"> | string;
    userId?: StringWithAggregatesFilter<"Notification"> | string;
    type?:
      | EnumNotificationTypeWithAggregatesFilter<"Notification">
      | $Enums.NotificationType;
    payload?: JsonWithAggregatesFilter<"Notification">;
    sent?: BoolWithAggregatesFilter<"Notification"> | boolean;
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string;
  };

  export type UserCreateInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    role: $Enums.Role;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    jobs?: JobCreateNestedManyWithoutRecruiterInput;
    applications?: ApplicationCreateNestedManyWithoutCandidateInput;
    resumes?: ResumeCreateNestedManyWithoutCandidateInput;
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput;
    notifications?: NotificationCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    role: $Enums.Role;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    jobs?: JobUncheckedCreateNestedManyWithoutRecruiterInput;
    applications?: ApplicationUncheckedCreateNestedManyWithoutCandidateInput;
    resumes?: ResumeUncheckedCreateNestedManyWithoutCandidateInput;
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isVerified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    jobs?: JobUpdateManyWithoutRecruiterNestedInput;
    applications?: ApplicationUpdateManyWithoutCandidateNestedInput;
    resumes?: ResumeUpdateManyWithoutCandidateNestedInput;
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput;
    notifications?: NotificationUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isVerified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    jobs?: JobUncheckedUpdateManyWithoutRecruiterNestedInput;
    applications?: ApplicationUncheckedUpdateManyWithoutCandidateNestedInput;
    resumes?: ResumeUncheckedUpdateManyWithoutCandidateNestedInput;
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    role: $Enums.Role;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isVerified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isVerified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RefreshTokenCreateInput = {
    id?: string;
    token: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
    user: UserCreateNestedOneWithoutRefreshTokensInput;
  };

  export type RefreshTokenUncheckedCreateInput = {
    id?: string;
    userId: string;
    token: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
  };

  export type RefreshTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutRefreshTokensNestedInput;
  };

  export type RefreshTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RefreshTokenCreateManyInput = {
    id?: string;
    userId: string;
    token: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
  };

  export type RefreshTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type JobCreateInput = {
    id?: string;
    title: string;
    description: string;
    location?: string | null;
    jobType: $Enums.JobType;
    salaryMin?: number | null;
    salaryMax?: number | null;
    skillsRequired?: JobCreateskillsRequiredInput | string[];
    status?: $Enums.JobStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    recruiter: UserCreateNestedOneWithoutJobsInput;
    applications?: ApplicationCreateNestedManyWithoutJobInput;
  };

  export type JobUncheckedCreateInput = {
    id?: string;
    recruiterId: string;
    title: string;
    description: string;
    location?: string | null;
    jobType: $Enums.JobType;
    salaryMin?: number | null;
    salaryMax?: number | null;
    skillsRequired?: JobCreateskillsRequiredInput | string[];
    status?: $Enums.JobStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    applications?: ApplicationUncheckedCreateNestedManyWithoutJobInput;
  };

  export type JobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    jobType?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType;
    salaryMin?: NullableIntFieldUpdateOperationsInput | number | null;
    salaryMax?: NullableIntFieldUpdateOperationsInput | number | null;
    skillsRequired?: JobUpdateskillsRequiredInput | string[];
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    recruiter?: UserUpdateOneRequiredWithoutJobsNestedInput;
    applications?: ApplicationUpdateManyWithoutJobNestedInput;
  };

  export type JobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    recruiterId?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    jobType?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType;
    salaryMin?: NullableIntFieldUpdateOperationsInput | number | null;
    salaryMax?: NullableIntFieldUpdateOperationsInput | number | null;
    skillsRequired?: JobUpdateskillsRequiredInput | string[];
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    applications?: ApplicationUncheckedUpdateManyWithoutJobNestedInput;
  };

  export type JobCreateManyInput = {
    id?: string;
    recruiterId: string;
    title: string;
    description: string;
    location?: string | null;
    jobType: $Enums.JobType;
    salaryMin?: number | null;
    salaryMax?: number | null;
    skillsRequired?: JobCreateskillsRequiredInput | string[];
    status?: $Enums.JobStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type JobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    jobType?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType;
    salaryMin?: NullableIntFieldUpdateOperationsInput | number | null;
    salaryMax?: NullableIntFieldUpdateOperationsInput | number | null;
    skillsRequired?: JobUpdateskillsRequiredInput | string[];
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type JobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    recruiterId?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    jobType?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType;
    salaryMin?: NullableIntFieldUpdateOperationsInput | number | null;
    salaryMax?: NullableIntFieldUpdateOperationsInput | number | null;
    skillsRequired?: JobUpdateskillsRequiredInput | string[];
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ApplicationCreateInput = {
    id?: string;
    resumeUrl?: string | null;
    status?: $Enums.ApplicationStatus;
    coverLetter?: string | null;
    atsScore?: number | null;
    appliedAt?: Date | string;
    updatedAt?: Date | string;
    candidate: UserCreateNestedOneWithoutApplicationsInput;
    job: JobCreateNestedOneWithoutApplicationsInput;
  };

  export type ApplicationUncheckedCreateInput = {
    id?: string;
    candidateId: string;
    jobId: string;
    resumeUrl?: string | null;
    status?: $Enums.ApplicationStatus;
    coverLetter?: string | null;
    atsScore?: number | null;
    appliedAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ApplicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    status?:
      | EnumApplicationStatusFieldUpdateOperationsInput
      | $Enums.ApplicationStatus;
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null;
    atsScore?: NullableIntFieldUpdateOperationsInput | number | null;
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    candidate?: UserUpdateOneRequiredWithoutApplicationsNestedInput;
    job?: JobUpdateOneRequiredWithoutApplicationsNestedInput;
  };

  export type ApplicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    candidateId?: StringFieldUpdateOperationsInput | string;
    jobId?: StringFieldUpdateOperationsInput | string;
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    status?:
      | EnumApplicationStatusFieldUpdateOperationsInput
      | $Enums.ApplicationStatus;
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null;
    atsScore?: NullableIntFieldUpdateOperationsInput | number | null;
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ApplicationCreateManyInput = {
    id?: string;
    candidateId: string;
    jobId: string;
    resumeUrl?: string | null;
    status?: $Enums.ApplicationStatus;
    coverLetter?: string | null;
    atsScore?: number | null;
    appliedAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ApplicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    status?:
      | EnumApplicationStatusFieldUpdateOperationsInput
      | $Enums.ApplicationStatus;
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null;
    atsScore?: NullableIntFieldUpdateOperationsInput | number | null;
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ApplicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    candidateId?: StringFieldUpdateOperationsInput | string;
    jobId?: StringFieldUpdateOperationsInput | string;
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    status?:
      | EnumApplicationStatusFieldUpdateOperationsInput
      | $Enums.ApplicationStatus;
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null;
    atsScore?: NullableIntFieldUpdateOperationsInput | number | null;
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ResumeCreateInput = {
    id?: string;
    s3Key: string;
    fileName?: string | null;
    parsedName?: string | null;
    parsedEmail?: string | null;
    parsedSkills?: ResumeCreateparsedSkillsInput | string[];
    rawText?: string | null;
    parseStatus?: $Enums.ParseStatus;
    uploadedAt?: Date | string;
    candidate: UserCreateNestedOneWithoutResumesInput;
  };

  export type ResumeUncheckedCreateInput = {
    id?: string;
    candidateId: string;
    s3Key: string;
    fileName?: string | null;
    parsedName?: string | null;
    parsedEmail?: string | null;
    parsedSkills?: ResumeCreateparsedSkillsInput | string[];
    rawText?: string | null;
    parseStatus?: $Enums.ParseStatus;
    uploadedAt?: Date | string;
  };

  export type ResumeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    s3Key?: StringFieldUpdateOperationsInput | string;
    fileName?: NullableStringFieldUpdateOperationsInput | string | null;
    parsedName?: NullableStringFieldUpdateOperationsInput | string | null;
    parsedEmail?: NullableStringFieldUpdateOperationsInput | string | null;
    parsedSkills?: ResumeUpdateparsedSkillsInput | string[];
    rawText?: NullableStringFieldUpdateOperationsInput | string | null;
    parseStatus?:
      | EnumParseStatusFieldUpdateOperationsInput
      | $Enums.ParseStatus;
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    candidate?: UserUpdateOneRequiredWithoutResumesNestedInput;
  };

  export type ResumeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    candidateId?: StringFieldUpdateOperationsInput | string;
    s3Key?: StringFieldUpdateOperationsInput | string;
    fileName?: NullableStringFieldUpdateOperationsInput | string | null;
    parsedName?: NullableStringFieldUpdateOperationsInput | string | null;
    parsedEmail?: NullableStringFieldUpdateOperationsInput | string | null;
    parsedSkills?: ResumeUpdateparsedSkillsInput | string[];
    rawText?: NullableStringFieldUpdateOperationsInput | string | null;
    parseStatus?:
      | EnumParseStatusFieldUpdateOperationsInput
      | $Enums.ParseStatus;
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ResumeCreateManyInput = {
    id?: string;
    candidateId: string;
    s3Key: string;
    fileName?: string | null;
    parsedName?: string | null;
    parsedEmail?: string | null;
    parsedSkills?: ResumeCreateparsedSkillsInput | string[];
    rawText?: string | null;
    parseStatus?: $Enums.ParseStatus;
    uploadedAt?: Date | string;
  };

  export type ResumeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    s3Key?: StringFieldUpdateOperationsInput | string;
    fileName?: NullableStringFieldUpdateOperationsInput | string | null;
    parsedName?: NullableStringFieldUpdateOperationsInput | string | null;
    parsedEmail?: NullableStringFieldUpdateOperationsInput | string | null;
    parsedSkills?: ResumeUpdateparsedSkillsInput | string[];
    rawText?: NullableStringFieldUpdateOperationsInput | string | null;
    parseStatus?:
      | EnumParseStatusFieldUpdateOperationsInput
      | $Enums.ParseStatus;
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ResumeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    candidateId?: StringFieldUpdateOperationsInput | string;
    s3Key?: StringFieldUpdateOperationsInput | string;
    fileName?: NullableStringFieldUpdateOperationsInput | string | null;
    parsedName?: NullableStringFieldUpdateOperationsInput | string | null;
    parsedEmail?: NullableStringFieldUpdateOperationsInput | string | null;
    parsedSkills?: ResumeUpdateparsedSkillsInput | string[];
    rawText?: NullableStringFieldUpdateOperationsInput | string | null;
    parseStatus?:
      | EnumParseStatusFieldUpdateOperationsInput
      | $Enums.ParseStatus;
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NotificationCreateInput = {
    id?: string;
    type: $Enums.NotificationType;
    payload: JsonNullValueInput | InputJsonValue;
    sent?: boolean;
    createdAt?: Date | string;
    user: UserCreateNestedOneWithoutNotificationsInput;
  };

  export type NotificationUncheckedCreateInput = {
    id?: string;
    userId: string;
    type: $Enums.NotificationType;
    payload: JsonNullValueInput | InputJsonValue;
    sent?: boolean;
    createdAt?: Date | string;
  };

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?:
      | EnumNotificationTypeFieldUpdateOperationsInput
      | $Enums.NotificationType;
    payload?: JsonNullValueInput | InputJsonValue;
    sent?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput;
  };

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    type?:
      | EnumNotificationTypeFieldUpdateOperationsInput
      | $Enums.NotificationType;
    payload?: JsonNullValueInput | InputJsonValue;
    sent?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NotificationCreateManyInput = {
    id?: string;
    userId: string;
    type: $Enums.NotificationType;
    payload: JsonNullValueInput | InputJsonValue;
    sent?: boolean;
    createdAt?: Date | string;
  };

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?:
      | EnumNotificationTypeFieldUpdateOperationsInput
      | $Enums.NotificationType;
    payload?: JsonNullValueInput | InputJsonValue;
    sent?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    type?:
      | EnumNotificationTypeFieldUpdateOperationsInput
      | $Enums.NotificationType;
    payload?: JsonNullValueInput | InputJsonValue;
    sent?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type JobListRelationFilter = {
    every?: JobWhereInput;
    some?: JobWhereInput;
    none?: JobWhereInput;
  };

  export type ApplicationListRelationFilter = {
    every?: ApplicationWhereInput;
    some?: ApplicationWhereInput;
    none?: ApplicationWhereInput;
  };

  export type ResumeListRelationFilter = {
    every?: ResumeWhereInput;
    some?: ResumeWhereInput;
    none?: ResumeWhereInput;
  };

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput;
    some?: RefreshTokenWhereInput;
    none?: RefreshTokenWhereInput;
  };

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput;
    some?: NotificationWhereInput;
    none?: NotificationWhereInput;
  };

  export type JobOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ResumeOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    passwordHash?: SortOrder;
    role?: SortOrder;
    isVerified?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    passwordHash?: SortOrder;
    role?: SortOrder;
    isVerified?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    passwordHash?: SortOrder;
    role?: SortOrder;
    isVerified?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumRoleFilter<$PrismaModel>;
    _max?: NestedEnumRoleFilter<$PrismaModel>;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type UserScalarRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    token?: SortOrder;
    expiresAt?: SortOrder;
    createdAt?: SortOrder;
  };

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    token?: SortOrder;
    expiresAt?: SortOrder;
    createdAt?: SortOrder;
  };

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    token?: SortOrder;
    expiresAt?: SortOrder;
    createdAt?: SortOrder;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type EnumJobTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.JobType | EnumJobTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumJobTypeFilter<$PrismaModel> | $Enums.JobType;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
  };

  export type EnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type JobCountOrderByAggregateInput = {
    id?: SortOrder;
    recruiterId?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    jobType?: SortOrder;
    salaryMin?: SortOrder;
    salaryMax?: SortOrder;
    skillsRequired?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type JobAvgOrderByAggregateInput = {
    salaryMin?: SortOrder;
    salaryMax?: SortOrder;
  };

  export type JobMaxOrderByAggregateInput = {
    id?: SortOrder;
    recruiterId?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    jobType?: SortOrder;
    salaryMin?: SortOrder;
    salaryMax?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type JobMinOrderByAggregateInput = {
    id?: SortOrder;
    recruiterId?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    jobType?: SortOrder;
    salaryMin?: SortOrder;
    salaryMax?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type JobSumOrderByAggregateInput = {
    salaryMin?: SortOrder;
    salaryMax?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type EnumJobTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobType | EnumJobTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumJobTypeWithAggregatesFilter<$PrismaModel> | $Enums.JobType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumJobTypeFilter<$PrismaModel>;
    _max?: NestedEnumJobTypeFilter<$PrismaModel>;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type EnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumJobStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.JobStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumJobStatusFilter<$PrismaModel>;
    _max?: NestedEnumJobStatusFilter<$PrismaModel>;
  };

  export type EnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.ApplicationStatus
      | EnumApplicationStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.ApplicationStatus[]
      | ListEnumApplicationStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ApplicationStatus[]
      | ListEnumApplicationStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumApplicationStatusFilter<$PrismaModel>
      | $Enums.ApplicationStatus;
  };

  export type JobScalarRelationFilter = {
    is?: JobWhereInput;
    isNot?: JobWhereInput;
  };

  export type ApplicationCandidateIdJobIdCompoundUniqueInput = {
    candidateId: string;
    jobId: string;
  };

  export type ApplicationCountOrderByAggregateInput = {
    id?: SortOrder;
    candidateId?: SortOrder;
    jobId?: SortOrder;
    resumeUrl?: SortOrder;
    status?: SortOrder;
    coverLetter?: SortOrder;
    atsScore?: SortOrder;
    appliedAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ApplicationAvgOrderByAggregateInput = {
    atsScore?: SortOrder;
  };

  export type ApplicationMaxOrderByAggregateInput = {
    id?: SortOrder;
    candidateId?: SortOrder;
    jobId?: SortOrder;
    resumeUrl?: SortOrder;
    status?: SortOrder;
    coverLetter?: SortOrder;
    atsScore?: SortOrder;
    appliedAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ApplicationMinOrderByAggregateInput = {
    id?: SortOrder;
    candidateId?: SortOrder;
    jobId?: SortOrder;
    resumeUrl?: SortOrder;
    status?: SortOrder;
    coverLetter?: SortOrder;
    atsScore?: SortOrder;
    appliedAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ApplicationSumOrderByAggregateInput = {
    atsScore?: SortOrder;
  };

  export type EnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?:
        | $Enums.ApplicationStatus
        | EnumApplicationStatusFieldRefInput<$PrismaModel>;
      in?:
        | $Enums.ApplicationStatus[]
        | ListEnumApplicationStatusFieldRefInput<$PrismaModel>;
      notIn?:
        | $Enums.ApplicationStatus[]
        | ListEnumApplicationStatusFieldRefInput<$PrismaModel>;
      not?:
        | NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel>
        | $Enums.ApplicationStatus;
      _count?: NestedIntFilter<$PrismaModel>;
      _min?: NestedEnumApplicationStatusFilter<$PrismaModel>;
      _max?: NestedEnumApplicationStatusFilter<$PrismaModel>;
    };

  export type EnumParseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ParseStatus | EnumParseStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ParseStatus[] | ListEnumParseStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ParseStatus[]
      | ListEnumParseStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumParseStatusFilter<$PrismaModel> | $Enums.ParseStatus;
  };

  export type ResumeCountOrderByAggregateInput = {
    id?: SortOrder;
    candidateId?: SortOrder;
    s3Key?: SortOrder;
    fileName?: SortOrder;
    parsedName?: SortOrder;
    parsedEmail?: SortOrder;
    parsedSkills?: SortOrder;
    rawText?: SortOrder;
    parseStatus?: SortOrder;
    uploadedAt?: SortOrder;
  };

  export type ResumeMaxOrderByAggregateInput = {
    id?: SortOrder;
    candidateId?: SortOrder;
    s3Key?: SortOrder;
    fileName?: SortOrder;
    parsedName?: SortOrder;
    parsedEmail?: SortOrder;
    rawText?: SortOrder;
    parseStatus?: SortOrder;
    uploadedAt?: SortOrder;
  };

  export type ResumeMinOrderByAggregateInput = {
    id?: SortOrder;
    candidateId?: SortOrder;
    s3Key?: SortOrder;
    fileName?: SortOrder;
    parsedName?: SortOrder;
    parsedEmail?: SortOrder;
    rawText?: SortOrder;
    parseStatus?: SortOrder;
    uploadedAt?: SortOrder;
  };

  export type EnumParseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParseStatus | EnumParseStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ParseStatus[] | ListEnumParseStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ParseStatus[]
      | ListEnumParseStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumParseStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.ParseStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumParseStatusFilter<$PrismaModel>;
    _max?: NestedEnumParseStatusFilter<$PrismaModel>;
  };

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.NotificationType
      | EnumNotificationTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.NotificationType[]
      | ListEnumNotificationTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.NotificationType[]
      | ListEnumNotificationTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumNotificationTypeFilter<$PrismaModel>
      | $Enums.NotificationType;
  };
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonFilterBase<$PrismaModel>>,
          Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, "path">
        >,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, "path">>;

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    type?: SortOrder;
    payload?: SortOrder;
    sent?: SortOrder;
    createdAt?: SortOrder;
  };

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    type?: SortOrder;
    sent?: SortOrder;
    createdAt?: SortOrder;
  };

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    type?: SortOrder;
    sent?: SortOrder;
    createdAt?: SortOrder;
  };

  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.NotificationType
      | EnumNotificationTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.NotificationType[]
      | ListEnumNotificationTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.NotificationType[]
      | ListEnumNotificationTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.NotificationType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>;
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>;
  };
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonWithAggregatesFilterBase<$PrismaModel>>,
          Exclude<
            keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>,
            "path"
          >
        >,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, "path">
      >;

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedJsonFilter<$PrismaModel>;
    _max?: NestedJsonFilter<$PrismaModel>;
  };

  export type JobCreateNestedManyWithoutRecruiterInput = {
    create?:
      | XOR<
          JobCreateWithoutRecruiterInput,
          JobUncheckedCreateWithoutRecruiterInput
        >
      | JobCreateWithoutRecruiterInput[]
      | JobUncheckedCreateWithoutRecruiterInput[];
    connectOrCreate?:
      | JobCreateOrConnectWithoutRecruiterInput
      | JobCreateOrConnectWithoutRecruiterInput[];
    createMany?: JobCreateManyRecruiterInputEnvelope;
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[];
  };

  export type ApplicationCreateNestedManyWithoutCandidateInput = {
    create?:
      | XOR<
          ApplicationCreateWithoutCandidateInput,
          ApplicationUncheckedCreateWithoutCandidateInput
        >
      | ApplicationCreateWithoutCandidateInput[]
      | ApplicationUncheckedCreateWithoutCandidateInput[];
    connectOrCreate?:
      | ApplicationCreateOrConnectWithoutCandidateInput
      | ApplicationCreateOrConnectWithoutCandidateInput[];
    createMany?: ApplicationCreateManyCandidateInputEnvelope;
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
  };

  export type ResumeCreateNestedManyWithoutCandidateInput = {
    create?:
      | XOR<
          ResumeCreateWithoutCandidateInput,
          ResumeUncheckedCreateWithoutCandidateInput
        >
      | ResumeCreateWithoutCandidateInput[]
      | ResumeUncheckedCreateWithoutCandidateInput[];
    connectOrCreate?:
      | ResumeCreateOrConnectWithoutCandidateInput
      | ResumeCreateOrConnectWithoutCandidateInput[];
    createMany?: ResumeCreateManyCandidateInputEnvelope;
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[];
  };

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          RefreshTokenCreateWithoutUserInput,
          RefreshTokenUncheckedCreateWithoutUserInput
        >
      | RefreshTokenCreateWithoutUserInput[]
      | RefreshTokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | RefreshTokenCreateOrConnectWithoutUserInput
      | RefreshTokenCreateOrConnectWithoutUserInput[];
    createMany?: RefreshTokenCreateManyUserInputEnvelope;
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[];
  };

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          NotificationCreateWithoutUserInput,
          NotificationUncheckedCreateWithoutUserInput
        >
      | NotificationCreateWithoutUserInput[]
      | NotificationUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | NotificationCreateOrConnectWithoutUserInput
      | NotificationCreateOrConnectWithoutUserInput[];
    createMany?: NotificationCreateManyUserInputEnvelope;
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
  };

  export type JobUncheckedCreateNestedManyWithoutRecruiterInput = {
    create?:
      | XOR<
          JobCreateWithoutRecruiterInput,
          JobUncheckedCreateWithoutRecruiterInput
        >
      | JobCreateWithoutRecruiterInput[]
      | JobUncheckedCreateWithoutRecruiterInput[];
    connectOrCreate?:
      | JobCreateOrConnectWithoutRecruiterInput
      | JobCreateOrConnectWithoutRecruiterInput[];
    createMany?: JobCreateManyRecruiterInputEnvelope;
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[];
  };

  export type ApplicationUncheckedCreateNestedManyWithoutCandidateInput = {
    create?:
      | XOR<
          ApplicationCreateWithoutCandidateInput,
          ApplicationUncheckedCreateWithoutCandidateInput
        >
      | ApplicationCreateWithoutCandidateInput[]
      | ApplicationUncheckedCreateWithoutCandidateInput[];
    connectOrCreate?:
      | ApplicationCreateOrConnectWithoutCandidateInput
      | ApplicationCreateOrConnectWithoutCandidateInput[];
    createMany?: ApplicationCreateManyCandidateInputEnvelope;
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
  };

  export type ResumeUncheckedCreateNestedManyWithoutCandidateInput = {
    create?:
      | XOR<
          ResumeCreateWithoutCandidateInput,
          ResumeUncheckedCreateWithoutCandidateInput
        >
      | ResumeCreateWithoutCandidateInput[]
      | ResumeUncheckedCreateWithoutCandidateInput[];
    connectOrCreate?:
      | ResumeCreateOrConnectWithoutCandidateInput
      | ResumeCreateOrConnectWithoutCandidateInput[];
    createMany?: ResumeCreateManyCandidateInputEnvelope;
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[];
  };

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          RefreshTokenCreateWithoutUserInput,
          RefreshTokenUncheckedCreateWithoutUserInput
        >
      | RefreshTokenCreateWithoutUserInput[]
      | RefreshTokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | RefreshTokenCreateOrConnectWithoutUserInput
      | RefreshTokenCreateOrConnectWithoutUserInput[];
    createMany?: RefreshTokenCreateManyUserInputEnvelope;
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[];
  };

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          NotificationCreateWithoutUserInput,
          NotificationUncheckedCreateWithoutUserInput
        >
      | NotificationCreateWithoutUserInput[]
      | NotificationUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | NotificationCreateOrConnectWithoutUserInput
      | NotificationCreateOrConnectWithoutUserInput[];
    createMany?: NotificationCreateManyUserInputEnvelope;
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type JobUpdateManyWithoutRecruiterNestedInput = {
    create?:
      | XOR<
          JobCreateWithoutRecruiterInput,
          JobUncheckedCreateWithoutRecruiterInput
        >
      | JobCreateWithoutRecruiterInput[]
      | JobUncheckedCreateWithoutRecruiterInput[];
    connectOrCreate?:
      | JobCreateOrConnectWithoutRecruiterInput
      | JobCreateOrConnectWithoutRecruiterInput[];
    upsert?:
      | JobUpsertWithWhereUniqueWithoutRecruiterInput
      | JobUpsertWithWhereUniqueWithoutRecruiterInput[];
    createMany?: JobCreateManyRecruiterInputEnvelope;
    set?: JobWhereUniqueInput | JobWhereUniqueInput[];
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[];
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[];
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[];
    update?:
      | JobUpdateWithWhereUniqueWithoutRecruiterInput
      | JobUpdateWithWhereUniqueWithoutRecruiterInput[];
    updateMany?:
      | JobUpdateManyWithWhereWithoutRecruiterInput
      | JobUpdateManyWithWhereWithoutRecruiterInput[];
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[];
  };

  export type ApplicationUpdateManyWithoutCandidateNestedInput = {
    create?:
      | XOR<
          ApplicationCreateWithoutCandidateInput,
          ApplicationUncheckedCreateWithoutCandidateInput
        >
      | ApplicationCreateWithoutCandidateInput[]
      | ApplicationUncheckedCreateWithoutCandidateInput[];
    connectOrCreate?:
      | ApplicationCreateOrConnectWithoutCandidateInput
      | ApplicationCreateOrConnectWithoutCandidateInput[];
    upsert?:
      | ApplicationUpsertWithWhereUniqueWithoutCandidateInput
      | ApplicationUpsertWithWhereUniqueWithoutCandidateInput[];
    createMany?: ApplicationCreateManyCandidateInputEnvelope;
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    update?:
      | ApplicationUpdateWithWhereUniqueWithoutCandidateInput
      | ApplicationUpdateWithWhereUniqueWithoutCandidateInput[];
    updateMany?:
      | ApplicationUpdateManyWithWhereWithoutCandidateInput
      | ApplicationUpdateManyWithWhereWithoutCandidateInput[];
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[];
  };

  export type ResumeUpdateManyWithoutCandidateNestedInput = {
    create?:
      | XOR<
          ResumeCreateWithoutCandidateInput,
          ResumeUncheckedCreateWithoutCandidateInput
        >
      | ResumeCreateWithoutCandidateInput[]
      | ResumeUncheckedCreateWithoutCandidateInput[];
    connectOrCreate?:
      | ResumeCreateOrConnectWithoutCandidateInput
      | ResumeCreateOrConnectWithoutCandidateInput[];
    upsert?:
      | ResumeUpsertWithWhereUniqueWithoutCandidateInput
      | ResumeUpsertWithWhereUniqueWithoutCandidateInput[];
    createMany?: ResumeCreateManyCandidateInputEnvelope;
    set?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[];
    disconnect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[];
    delete?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[];
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[];
    update?:
      | ResumeUpdateWithWhereUniqueWithoutCandidateInput
      | ResumeUpdateWithWhereUniqueWithoutCandidateInput[];
    updateMany?:
      | ResumeUpdateManyWithWhereWithoutCandidateInput
      | ResumeUpdateManyWithWhereWithoutCandidateInput[];
    deleteMany?: ResumeScalarWhereInput | ResumeScalarWhereInput[];
  };

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          RefreshTokenCreateWithoutUserInput,
          RefreshTokenUncheckedCreateWithoutUserInput
        >
      | RefreshTokenCreateWithoutUserInput[]
      | RefreshTokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | RefreshTokenCreateOrConnectWithoutUserInput
      | RefreshTokenCreateOrConnectWithoutUserInput[];
    upsert?:
      | RefreshTokenUpsertWithWhereUniqueWithoutUserInput
      | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: RefreshTokenCreateManyUserInputEnvelope;
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[];
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[];
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[];
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[];
    update?:
      | RefreshTokenUpdateWithWhereUniqueWithoutUserInput
      | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | RefreshTokenUpdateManyWithWhereWithoutUserInput
      | RefreshTokenUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[];
  };

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          NotificationCreateWithoutUserInput,
          NotificationUncheckedCreateWithoutUserInput
        >
      | NotificationCreateWithoutUserInput[]
      | NotificationUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | NotificationCreateOrConnectWithoutUserInput
      | NotificationCreateOrConnectWithoutUserInput[];
    upsert?:
      | NotificationUpsertWithWhereUniqueWithoutUserInput
      | NotificationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: NotificationCreateManyUserInputEnvelope;
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    update?:
      | NotificationUpdateWithWhereUniqueWithoutUserInput
      | NotificationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | NotificationUpdateManyWithWhereWithoutUserInput
      | NotificationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[];
  };

  export type JobUncheckedUpdateManyWithoutRecruiterNestedInput = {
    create?:
      | XOR<
          JobCreateWithoutRecruiterInput,
          JobUncheckedCreateWithoutRecruiterInput
        >
      | JobCreateWithoutRecruiterInput[]
      | JobUncheckedCreateWithoutRecruiterInput[];
    connectOrCreate?:
      | JobCreateOrConnectWithoutRecruiterInput
      | JobCreateOrConnectWithoutRecruiterInput[];
    upsert?:
      | JobUpsertWithWhereUniqueWithoutRecruiterInput
      | JobUpsertWithWhereUniqueWithoutRecruiterInput[];
    createMany?: JobCreateManyRecruiterInputEnvelope;
    set?: JobWhereUniqueInput | JobWhereUniqueInput[];
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[];
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[];
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[];
    update?:
      | JobUpdateWithWhereUniqueWithoutRecruiterInput
      | JobUpdateWithWhereUniqueWithoutRecruiterInput[];
    updateMany?:
      | JobUpdateManyWithWhereWithoutRecruiterInput
      | JobUpdateManyWithWhereWithoutRecruiterInput[];
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[];
  };

  export type ApplicationUncheckedUpdateManyWithoutCandidateNestedInput = {
    create?:
      | XOR<
          ApplicationCreateWithoutCandidateInput,
          ApplicationUncheckedCreateWithoutCandidateInput
        >
      | ApplicationCreateWithoutCandidateInput[]
      | ApplicationUncheckedCreateWithoutCandidateInput[];
    connectOrCreate?:
      | ApplicationCreateOrConnectWithoutCandidateInput
      | ApplicationCreateOrConnectWithoutCandidateInput[];
    upsert?:
      | ApplicationUpsertWithWhereUniqueWithoutCandidateInput
      | ApplicationUpsertWithWhereUniqueWithoutCandidateInput[];
    createMany?: ApplicationCreateManyCandidateInputEnvelope;
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    update?:
      | ApplicationUpdateWithWhereUniqueWithoutCandidateInput
      | ApplicationUpdateWithWhereUniqueWithoutCandidateInput[];
    updateMany?:
      | ApplicationUpdateManyWithWhereWithoutCandidateInput
      | ApplicationUpdateManyWithWhereWithoutCandidateInput[];
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[];
  };

  export type ResumeUncheckedUpdateManyWithoutCandidateNestedInput = {
    create?:
      | XOR<
          ResumeCreateWithoutCandidateInput,
          ResumeUncheckedCreateWithoutCandidateInput
        >
      | ResumeCreateWithoutCandidateInput[]
      | ResumeUncheckedCreateWithoutCandidateInput[];
    connectOrCreate?:
      | ResumeCreateOrConnectWithoutCandidateInput
      | ResumeCreateOrConnectWithoutCandidateInput[];
    upsert?:
      | ResumeUpsertWithWhereUniqueWithoutCandidateInput
      | ResumeUpsertWithWhereUniqueWithoutCandidateInput[];
    createMany?: ResumeCreateManyCandidateInputEnvelope;
    set?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[];
    disconnect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[];
    delete?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[];
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[];
    update?:
      | ResumeUpdateWithWhereUniqueWithoutCandidateInput
      | ResumeUpdateWithWhereUniqueWithoutCandidateInput[];
    updateMany?:
      | ResumeUpdateManyWithWhereWithoutCandidateInput
      | ResumeUpdateManyWithWhereWithoutCandidateInput[];
    deleteMany?: ResumeScalarWhereInput | ResumeScalarWhereInput[];
  };

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          RefreshTokenCreateWithoutUserInput,
          RefreshTokenUncheckedCreateWithoutUserInput
        >
      | RefreshTokenCreateWithoutUserInput[]
      | RefreshTokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | RefreshTokenCreateOrConnectWithoutUserInput
      | RefreshTokenCreateOrConnectWithoutUserInput[];
    upsert?:
      | RefreshTokenUpsertWithWhereUniqueWithoutUserInput
      | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: RefreshTokenCreateManyUserInputEnvelope;
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[];
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[];
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[];
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[];
    update?:
      | RefreshTokenUpdateWithWhereUniqueWithoutUserInput
      | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | RefreshTokenUpdateManyWithWhereWithoutUserInput
      | RefreshTokenUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[];
  };

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          NotificationCreateWithoutUserInput,
          NotificationUncheckedCreateWithoutUserInput
        >
      | NotificationCreateWithoutUserInput[]
      | NotificationUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | NotificationCreateOrConnectWithoutUserInput
      | NotificationCreateOrConnectWithoutUserInput[];
    upsert?:
      | NotificationUpsertWithWhereUniqueWithoutUserInput
      | NotificationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: NotificationCreateManyUserInputEnvelope;
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    update?:
      | NotificationUpdateWithWhereUniqueWithoutUserInput
      | NotificationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | NotificationUpdateManyWithWhereWithoutUserInput
      | NotificationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<
      UserCreateWithoutRefreshTokensInput,
      UserUncheckedCreateWithoutRefreshTokensInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<
      UserCreateWithoutRefreshTokensInput,
      UserUncheckedCreateWithoutRefreshTokensInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput;
    upsert?: UserUpsertWithoutRefreshTokensInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutRefreshTokensInput,
        UserUpdateWithoutRefreshTokensInput
      >,
      UserUncheckedUpdateWithoutRefreshTokensInput
    >;
  };

  export type JobCreateskillsRequiredInput = {
    set: string[];
  };

  export type UserCreateNestedOneWithoutJobsInput = {
    create?: XOR<
      UserCreateWithoutJobsInput,
      UserUncheckedCreateWithoutJobsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutJobsInput;
    connect?: UserWhereUniqueInput;
  };

  export type ApplicationCreateNestedManyWithoutJobInput = {
    create?:
      | XOR<
          ApplicationCreateWithoutJobInput,
          ApplicationUncheckedCreateWithoutJobInput
        >
      | ApplicationCreateWithoutJobInput[]
      | ApplicationUncheckedCreateWithoutJobInput[];
    connectOrCreate?:
      | ApplicationCreateOrConnectWithoutJobInput
      | ApplicationCreateOrConnectWithoutJobInput[];
    createMany?: ApplicationCreateManyJobInputEnvelope;
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
  };

  export type ApplicationUncheckedCreateNestedManyWithoutJobInput = {
    create?:
      | XOR<
          ApplicationCreateWithoutJobInput,
          ApplicationUncheckedCreateWithoutJobInput
        >
      | ApplicationCreateWithoutJobInput[]
      | ApplicationUncheckedCreateWithoutJobInput[];
    connectOrCreate?:
      | ApplicationCreateOrConnectWithoutJobInput
      | ApplicationCreateOrConnectWithoutJobInput[];
    createMany?: ApplicationCreateManyJobInputEnvelope;
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type EnumJobTypeFieldUpdateOperationsInput = {
    set?: $Enums.JobType;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type JobUpdateskillsRequiredInput = {
    set?: string[];
    push?: string | string[];
  };

  export type EnumJobStatusFieldUpdateOperationsInput = {
    set?: $Enums.JobStatus;
  };

  export type UserUpdateOneRequiredWithoutJobsNestedInput = {
    create?: XOR<
      UserCreateWithoutJobsInput,
      UserUncheckedCreateWithoutJobsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutJobsInput;
    upsert?: UserUpsertWithoutJobsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<UserUpdateToOneWithWhereWithoutJobsInput, UserUpdateWithoutJobsInput>,
      UserUncheckedUpdateWithoutJobsInput
    >;
  };

  export type ApplicationUpdateManyWithoutJobNestedInput = {
    create?:
      | XOR<
          ApplicationCreateWithoutJobInput,
          ApplicationUncheckedCreateWithoutJobInput
        >
      | ApplicationCreateWithoutJobInput[]
      | ApplicationUncheckedCreateWithoutJobInput[];
    connectOrCreate?:
      | ApplicationCreateOrConnectWithoutJobInput
      | ApplicationCreateOrConnectWithoutJobInput[];
    upsert?:
      | ApplicationUpsertWithWhereUniqueWithoutJobInput
      | ApplicationUpsertWithWhereUniqueWithoutJobInput[];
    createMany?: ApplicationCreateManyJobInputEnvelope;
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    update?:
      | ApplicationUpdateWithWhereUniqueWithoutJobInput
      | ApplicationUpdateWithWhereUniqueWithoutJobInput[];
    updateMany?:
      | ApplicationUpdateManyWithWhereWithoutJobInput
      | ApplicationUpdateManyWithWhereWithoutJobInput[];
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[];
  };

  export type ApplicationUncheckedUpdateManyWithoutJobNestedInput = {
    create?:
      | XOR<
          ApplicationCreateWithoutJobInput,
          ApplicationUncheckedCreateWithoutJobInput
        >
      | ApplicationCreateWithoutJobInput[]
      | ApplicationUncheckedCreateWithoutJobInput[];
    connectOrCreate?:
      | ApplicationCreateOrConnectWithoutJobInput
      | ApplicationCreateOrConnectWithoutJobInput[];
    upsert?:
      | ApplicationUpsertWithWhereUniqueWithoutJobInput
      | ApplicationUpsertWithWhereUniqueWithoutJobInput[];
    createMany?: ApplicationCreateManyJobInputEnvelope;
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    update?:
      | ApplicationUpdateWithWhereUniqueWithoutJobInput
      | ApplicationUpdateWithWhereUniqueWithoutJobInput[];
    updateMany?:
      | ApplicationUpdateManyWithWhereWithoutJobInput
      | ApplicationUpdateManyWithWhereWithoutJobInput[];
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<
      UserCreateWithoutApplicationsInput,
      UserUncheckedCreateWithoutApplicationsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput;
    connect?: UserWhereUniqueInput;
  };

  export type JobCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<
      JobCreateWithoutApplicationsInput,
      JobUncheckedCreateWithoutApplicationsInput
    >;
    connectOrCreate?: JobCreateOrConnectWithoutApplicationsInput;
    connect?: JobWhereUniqueInput;
  };

  export type EnumApplicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApplicationStatus;
  };

  export type UserUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<
      UserCreateWithoutApplicationsInput,
      UserUncheckedCreateWithoutApplicationsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput;
    upsert?: UserUpsertWithoutApplicationsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutApplicationsInput,
        UserUpdateWithoutApplicationsInput
      >,
      UserUncheckedUpdateWithoutApplicationsInput
    >;
  };

  export type JobUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<
      JobCreateWithoutApplicationsInput,
      JobUncheckedCreateWithoutApplicationsInput
    >;
    connectOrCreate?: JobCreateOrConnectWithoutApplicationsInput;
    upsert?: JobUpsertWithoutApplicationsInput;
    connect?: JobWhereUniqueInput;
    update?: XOR<
      XOR<
        JobUpdateToOneWithWhereWithoutApplicationsInput,
        JobUpdateWithoutApplicationsInput
      >,
      JobUncheckedUpdateWithoutApplicationsInput
    >;
  };

  export type ResumeCreateparsedSkillsInput = {
    set: string[];
  };

  export type UserCreateNestedOneWithoutResumesInput = {
    create?: XOR<
      UserCreateWithoutResumesInput,
      UserUncheckedCreateWithoutResumesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutResumesInput;
    connect?: UserWhereUniqueInput;
  };

  export type ResumeUpdateparsedSkillsInput = {
    set?: string[];
    push?: string | string[];
  };

  export type EnumParseStatusFieldUpdateOperationsInput = {
    set?: $Enums.ParseStatus;
  };

  export type UserUpdateOneRequiredWithoutResumesNestedInput = {
    create?: XOR<
      UserCreateWithoutResumesInput,
      UserUncheckedCreateWithoutResumesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutResumesInput;
    upsert?: UserUpsertWithoutResumesInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutResumesInput,
        UserUpdateWithoutResumesInput
      >,
      UserUncheckedUpdateWithoutResumesInput
    >;
  };

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<
      UserCreateWithoutNotificationsInput,
      UserUncheckedCreateWithoutNotificationsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput;
    connect?: UserWhereUniqueInput;
  };

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType;
  };

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<
      UserCreateWithoutNotificationsInput,
      UserUncheckedCreateWithoutNotificationsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput;
    upsert?: UserUpsertWithoutNotificationsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutNotificationsInput,
        UserUpdateWithoutNotificationsInput
      >,
      UserUncheckedUpdateWithoutNotificationsInput
    >;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumRoleFilter<$PrismaModel>;
    _max?: NestedEnumRoleFilter<$PrismaModel>;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedEnumJobTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.JobType | EnumJobTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumJobTypeFilter<$PrismaModel> | $Enums.JobType;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedEnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedEnumJobTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobType | EnumJobTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumJobTypeWithAggregatesFilter<$PrismaModel> | $Enums.JobType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumJobTypeFilter<$PrismaModel>;
    _max?: NestedEnumJobTypeFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedEnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumJobStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.JobStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumJobStatusFilter<$PrismaModel>;
    _max?: NestedEnumJobStatusFilter<$PrismaModel>;
  };

  export type NestedEnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.ApplicationStatus
      | EnumApplicationStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.ApplicationStatus[]
      | ListEnumApplicationStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ApplicationStatus[]
      | ListEnumApplicationStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumApplicationStatusFilter<$PrismaModel>
      | $Enums.ApplicationStatus;
  };

  export type NestedEnumApplicationStatusWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.ApplicationStatus
      | EnumApplicationStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.ApplicationStatus[]
      | ListEnumApplicationStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ApplicationStatus[]
      | ListEnumApplicationStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.ApplicationStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>;
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>;
  };

  export type NestedEnumParseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ParseStatus | EnumParseStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ParseStatus[] | ListEnumParseStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ParseStatus[]
      | ListEnumParseStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumParseStatusFilter<$PrismaModel> | $Enums.ParseStatus;
  };

  export type NestedEnumParseStatusWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: $Enums.ParseStatus | EnumParseStatusFieldRefInput<$PrismaModel>;
      in?:
        | $Enums.ParseStatus[]
        | ListEnumParseStatusFieldRefInput<$PrismaModel>;
      notIn?:
        | $Enums.ParseStatus[]
        | ListEnumParseStatusFieldRefInput<$PrismaModel>;
      not?:
        | NestedEnumParseStatusWithAggregatesFilter<$PrismaModel>
        | $Enums.ParseStatus;
      _count?: NestedIntFilter<$PrismaModel>;
      _min?: NestedEnumParseStatusFilter<$PrismaModel>;
      _max?: NestedEnumParseStatusFilter<$PrismaModel>;
    };

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.NotificationType
      | EnumNotificationTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.NotificationType[]
      | ListEnumNotificationTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.NotificationType[]
      | ListEnumNotificationTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumNotificationTypeFilter<$PrismaModel>
      | $Enums.NotificationType;
  };

  export type NestedEnumNotificationTypeWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.NotificationType
      | EnumNotificationTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.NotificationType[]
      | ListEnumNotificationTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.NotificationType[]
      | ListEnumNotificationTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.NotificationType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>;
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>;
  };
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<NestedJsonFilterBase<$PrismaModel>>,
          Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, "path">
        >,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, "path">>;

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type JobCreateWithoutRecruiterInput = {
    id?: string;
    title: string;
    description: string;
    location?: string | null;
    jobType: $Enums.JobType;
    salaryMin?: number | null;
    salaryMax?: number | null;
    skillsRequired?: JobCreateskillsRequiredInput | string[];
    status?: $Enums.JobStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    applications?: ApplicationCreateNestedManyWithoutJobInput;
  };

  export type JobUncheckedCreateWithoutRecruiterInput = {
    id?: string;
    title: string;
    description: string;
    location?: string | null;
    jobType: $Enums.JobType;
    salaryMin?: number | null;
    salaryMax?: number | null;
    skillsRequired?: JobCreateskillsRequiredInput | string[];
    status?: $Enums.JobStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    applications?: ApplicationUncheckedCreateNestedManyWithoutJobInput;
  };

  export type JobCreateOrConnectWithoutRecruiterInput = {
    where: JobWhereUniqueInput;
    create: XOR<
      JobCreateWithoutRecruiterInput,
      JobUncheckedCreateWithoutRecruiterInput
    >;
  };

  export type JobCreateManyRecruiterInputEnvelope = {
    data: JobCreateManyRecruiterInput | JobCreateManyRecruiterInput[];
    skipDuplicates?: boolean;
  };

  export type ApplicationCreateWithoutCandidateInput = {
    id?: string;
    resumeUrl?: string | null;
    status?: $Enums.ApplicationStatus;
    coverLetter?: string | null;
    atsScore?: number | null;
    appliedAt?: Date | string;
    updatedAt?: Date | string;
    job: JobCreateNestedOneWithoutApplicationsInput;
  };

  export type ApplicationUncheckedCreateWithoutCandidateInput = {
    id?: string;
    jobId: string;
    resumeUrl?: string | null;
    status?: $Enums.ApplicationStatus;
    coverLetter?: string | null;
    atsScore?: number | null;
    appliedAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ApplicationCreateOrConnectWithoutCandidateInput = {
    where: ApplicationWhereUniqueInput;
    create: XOR<
      ApplicationCreateWithoutCandidateInput,
      ApplicationUncheckedCreateWithoutCandidateInput
    >;
  };

  export type ApplicationCreateManyCandidateInputEnvelope = {
    data:
      | ApplicationCreateManyCandidateInput
      | ApplicationCreateManyCandidateInput[];
    skipDuplicates?: boolean;
  };

  export type ResumeCreateWithoutCandidateInput = {
    id?: string;
    s3Key: string;
    fileName?: string | null;
    parsedName?: string | null;
    parsedEmail?: string | null;
    parsedSkills?: ResumeCreateparsedSkillsInput | string[];
    rawText?: string | null;
    parseStatus?: $Enums.ParseStatus;
    uploadedAt?: Date | string;
  };

  export type ResumeUncheckedCreateWithoutCandidateInput = {
    id?: string;
    s3Key: string;
    fileName?: string | null;
    parsedName?: string | null;
    parsedEmail?: string | null;
    parsedSkills?: ResumeCreateparsedSkillsInput | string[];
    rawText?: string | null;
    parseStatus?: $Enums.ParseStatus;
    uploadedAt?: Date | string;
  };

  export type ResumeCreateOrConnectWithoutCandidateInput = {
    where: ResumeWhereUniqueInput;
    create: XOR<
      ResumeCreateWithoutCandidateInput,
      ResumeUncheckedCreateWithoutCandidateInput
    >;
  };

  export type ResumeCreateManyCandidateInputEnvelope = {
    data: ResumeCreateManyCandidateInput | ResumeCreateManyCandidateInput[];
    skipDuplicates?: boolean;
  };

  export type RefreshTokenCreateWithoutUserInput = {
    id?: string;
    token: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
  };

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: string;
    token: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
  };

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput;
    create: XOR<
      RefreshTokenCreateWithoutUserInput,
      RefreshTokenUncheckedCreateWithoutUserInput
    >;
  };

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type NotificationCreateWithoutUserInput = {
    id?: string;
    type: $Enums.NotificationType;
    payload: JsonNullValueInput | InputJsonValue;
    sent?: boolean;
    createdAt?: Date | string;
  };

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string;
    type: $Enums.NotificationType;
    payload: JsonNullValueInput | InputJsonValue;
    sent?: boolean;
    createdAt?: Date | string;
  };

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput;
    create: XOR<
      NotificationCreateWithoutUserInput,
      NotificationUncheckedCreateWithoutUserInput
    >;
  };

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type JobUpsertWithWhereUniqueWithoutRecruiterInput = {
    where: JobWhereUniqueInput;
    update: XOR<
      JobUpdateWithoutRecruiterInput,
      JobUncheckedUpdateWithoutRecruiterInput
    >;
    create: XOR<
      JobCreateWithoutRecruiterInput,
      JobUncheckedCreateWithoutRecruiterInput
    >;
  };

  export type JobUpdateWithWhereUniqueWithoutRecruiterInput = {
    where: JobWhereUniqueInput;
    data: XOR<
      JobUpdateWithoutRecruiterInput,
      JobUncheckedUpdateWithoutRecruiterInput
    >;
  };

  export type JobUpdateManyWithWhereWithoutRecruiterInput = {
    where: JobScalarWhereInput;
    data: XOR<
      JobUpdateManyMutationInput,
      JobUncheckedUpdateManyWithoutRecruiterInput
    >;
  };

  export type JobScalarWhereInput = {
    AND?: JobScalarWhereInput | JobScalarWhereInput[];
    OR?: JobScalarWhereInput[];
    NOT?: JobScalarWhereInput | JobScalarWhereInput[];
    id?: StringFilter<"Job"> | string;
    recruiterId?: StringFilter<"Job"> | string;
    title?: StringFilter<"Job"> | string;
    description?: StringFilter<"Job"> | string;
    location?: StringNullableFilter<"Job"> | string | null;
    jobType?: EnumJobTypeFilter<"Job"> | $Enums.JobType;
    salaryMin?: IntNullableFilter<"Job"> | number | null;
    salaryMax?: IntNullableFilter<"Job"> | number | null;
    skillsRequired?: StringNullableListFilter<"Job">;
    status?: EnumJobStatusFilter<"Job"> | $Enums.JobStatus;
    createdAt?: DateTimeFilter<"Job"> | Date | string;
    updatedAt?: DateTimeFilter<"Job"> | Date | string;
  };

  export type ApplicationUpsertWithWhereUniqueWithoutCandidateInput = {
    where: ApplicationWhereUniqueInput;
    update: XOR<
      ApplicationUpdateWithoutCandidateInput,
      ApplicationUncheckedUpdateWithoutCandidateInput
    >;
    create: XOR<
      ApplicationCreateWithoutCandidateInput,
      ApplicationUncheckedCreateWithoutCandidateInput
    >;
  };

  export type ApplicationUpdateWithWhereUniqueWithoutCandidateInput = {
    where: ApplicationWhereUniqueInput;
    data: XOR<
      ApplicationUpdateWithoutCandidateInput,
      ApplicationUncheckedUpdateWithoutCandidateInput
    >;
  };

  export type ApplicationUpdateManyWithWhereWithoutCandidateInput = {
    where: ApplicationScalarWhereInput;
    data: XOR<
      ApplicationUpdateManyMutationInput,
      ApplicationUncheckedUpdateManyWithoutCandidateInput
    >;
  };

  export type ApplicationScalarWhereInput = {
    AND?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[];
    OR?: ApplicationScalarWhereInput[];
    NOT?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[];
    id?: StringFilter<"Application"> | string;
    candidateId?: StringFilter<"Application"> | string;
    jobId?: StringFilter<"Application"> | string;
    resumeUrl?: StringNullableFilter<"Application"> | string | null;
    status?:
      | EnumApplicationStatusFilter<"Application">
      | $Enums.ApplicationStatus;
    coverLetter?: StringNullableFilter<"Application"> | string | null;
    atsScore?: IntNullableFilter<"Application"> | number | null;
    appliedAt?: DateTimeFilter<"Application"> | Date | string;
    updatedAt?: DateTimeFilter<"Application"> | Date | string;
  };

  export type ResumeUpsertWithWhereUniqueWithoutCandidateInput = {
    where: ResumeWhereUniqueInput;
    update: XOR<
      ResumeUpdateWithoutCandidateInput,
      ResumeUncheckedUpdateWithoutCandidateInput
    >;
    create: XOR<
      ResumeCreateWithoutCandidateInput,
      ResumeUncheckedCreateWithoutCandidateInput
    >;
  };

  export type ResumeUpdateWithWhereUniqueWithoutCandidateInput = {
    where: ResumeWhereUniqueInput;
    data: XOR<
      ResumeUpdateWithoutCandidateInput,
      ResumeUncheckedUpdateWithoutCandidateInput
    >;
  };

  export type ResumeUpdateManyWithWhereWithoutCandidateInput = {
    where: ResumeScalarWhereInput;
    data: XOR<
      ResumeUpdateManyMutationInput,
      ResumeUncheckedUpdateManyWithoutCandidateInput
    >;
  };

  export type ResumeScalarWhereInput = {
    AND?: ResumeScalarWhereInput | ResumeScalarWhereInput[];
    OR?: ResumeScalarWhereInput[];
    NOT?: ResumeScalarWhereInput | ResumeScalarWhereInput[];
    id?: StringFilter<"Resume"> | string;
    candidateId?: StringFilter<"Resume"> | string;
    s3Key?: StringFilter<"Resume"> | string;
    fileName?: StringNullableFilter<"Resume"> | string | null;
    parsedName?: StringNullableFilter<"Resume"> | string | null;
    parsedEmail?: StringNullableFilter<"Resume"> | string | null;
    parsedSkills?: StringNullableListFilter<"Resume">;
    rawText?: StringNullableFilter<"Resume"> | string | null;
    parseStatus?: EnumParseStatusFilter<"Resume"> | $Enums.ParseStatus;
    uploadedAt?: DateTimeFilter<"Resume"> | Date | string;
  };

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput;
    update: XOR<
      RefreshTokenUpdateWithoutUserInput,
      RefreshTokenUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      RefreshTokenCreateWithoutUserInput,
      RefreshTokenUncheckedCreateWithoutUserInput
    >;
  };

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput;
    data: XOR<
      RefreshTokenUpdateWithoutUserInput,
      RefreshTokenUncheckedUpdateWithoutUserInput
    >;
  };

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput;
    data: XOR<
      RefreshTokenUpdateManyMutationInput,
      RefreshTokenUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[];
    OR?: RefreshTokenScalarWhereInput[];
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[];
    id?: StringFilter<"RefreshToken"> | string;
    userId?: StringFilter<"RefreshToken"> | string;
    token?: StringFilter<"RefreshToken"> | string;
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string;
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string;
  };

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput;
    update: XOR<
      NotificationUpdateWithoutUserInput,
      NotificationUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      NotificationCreateWithoutUserInput,
      NotificationUncheckedCreateWithoutUserInput
    >;
  };

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput;
    data: XOR<
      NotificationUpdateWithoutUserInput,
      NotificationUncheckedUpdateWithoutUserInput
    >;
  };

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput;
    data: XOR<
      NotificationUpdateManyMutationInput,
      NotificationUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[];
    OR?: NotificationScalarWhereInput[];
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[];
    id?: StringFilter<"Notification"> | string;
    userId?: StringFilter<"Notification"> | string;
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType;
    payload?: JsonFilter<"Notification">;
    sent?: BoolFilter<"Notification"> | boolean;
    createdAt?: DateTimeFilter<"Notification"> | Date | string;
  };

  export type UserCreateWithoutRefreshTokensInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    role: $Enums.Role;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    jobs?: JobCreateNestedManyWithoutRecruiterInput;
    applications?: ApplicationCreateNestedManyWithoutCandidateInput;
    resumes?: ResumeCreateNestedManyWithoutCandidateInput;
    notifications?: NotificationCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutRefreshTokensInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    role: $Enums.Role;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    jobs?: JobUncheckedCreateNestedManyWithoutRecruiterInput;
    applications?: ApplicationUncheckedCreateNestedManyWithoutCandidateInput;
    resumes?: ResumeUncheckedCreateNestedManyWithoutCandidateInput;
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutRefreshTokensInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutRefreshTokensInput,
      UserUncheckedCreateWithoutRefreshTokensInput
    >;
  };

  export type UserUpsertWithoutRefreshTokensInput = {
    update: XOR<
      UserUpdateWithoutRefreshTokensInput,
      UserUncheckedUpdateWithoutRefreshTokensInput
    >;
    create: XOR<
      UserCreateWithoutRefreshTokensInput,
      UserUncheckedCreateWithoutRefreshTokensInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutRefreshTokensInput,
      UserUncheckedUpdateWithoutRefreshTokensInput
    >;
  };

  export type UserUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isVerified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    jobs?: JobUpdateManyWithoutRecruiterNestedInput;
    applications?: ApplicationUpdateManyWithoutCandidateNestedInput;
    resumes?: ResumeUpdateManyWithoutCandidateNestedInput;
    notifications?: NotificationUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isVerified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    jobs?: JobUncheckedUpdateManyWithoutRecruiterNestedInput;
    applications?: ApplicationUncheckedUpdateManyWithoutCandidateNestedInput;
    resumes?: ResumeUncheckedUpdateManyWithoutCandidateNestedInput;
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateWithoutJobsInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    role: $Enums.Role;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    applications?: ApplicationCreateNestedManyWithoutCandidateInput;
    resumes?: ResumeCreateNestedManyWithoutCandidateInput;
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput;
    notifications?: NotificationCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutJobsInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    role: $Enums.Role;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    applications?: ApplicationUncheckedCreateNestedManyWithoutCandidateInput;
    resumes?: ResumeUncheckedCreateNestedManyWithoutCandidateInput;
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutJobsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutJobsInput,
      UserUncheckedCreateWithoutJobsInput
    >;
  };

  export type ApplicationCreateWithoutJobInput = {
    id?: string;
    resumeUrl?: string | null;
    status?: $Enums.ApplicationStatus;
    coverLetter?: string | null;
    atsScore?: number | null;
    appliedAt?: Date | string;
    updatedAt?: Date | string;
    candidate: UserCreateNestedOneWithoutApplicationsInput;
  };

  export type ApplicationUncheckedCreateWithoutJobInput = {
    id?: string;
    candidateId: string;
    resumeUrl?: string | null;
    status?: $Enums.ApplicationStatus;
    coverLetter?: string | null;
    atsScore?: number | null;
    appliedAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ApplicationCreateOrConnectWithoutJobInput = {
    where: ApplicationWhereUniqueInput;
    create: XOR<
      ApplicationCreateWithoutJobInput,
      ApplicationUncheckedCreateWithoutJobInput
    >;
  };

  export type ApplicationCreateManyJobInputEnvelope = {
    data: ApplicationCreateManyJobInput | ApplicationCreateManyJobInput[];
    skipDuplicates?: boolean;
  };

  export type UserUpsertWithoutJobsInput = {
    update: XOR<
      UserUpdateWithoutJobsInput,
      UserUncheckedUpdateWithoutJobsInput
    >;
    create: XOR<
      UserCreateWithoutJobsInput,
      UserUncheckedCreateWithoutJobsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutJobsInput = {
    where?: UserWhereInput;
    data: XOR<UserUpdateWithoutJobsInput, UserUncheckedUpdateWithoutJobsInput>;
  };

  export type UserUpdateWithoutJobsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isVerified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    applications?: ApplicationUpdateManyWithoutCandidateNestedInput;
    resumes?: ResumeUpdateManyWithoutCandidateNestedInput;
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput;
    notifications?: NotificationUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutJobsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isVerified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    applications?: ApplicationUncheckedUpdateManyWithoutCandidateNestedInput;
    resumes?: ResumeUncheckedUpdateManyWithoutCandidateNestedInput;
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type ApplicationUpsertWithWhereUniqueWithoutJobInput = {
    where: ApplicationWhereUniqueInput;
    update: XOR<
      ApplicationUpdateWithoutJobInput,
      ApplicationUncheckedUpdateWithoutJobInput
    >;
    create: XOR<
      ApplicationCreateWithoutJobInput,
      ApplicationUncheckedCreateWithoutJobInput
    >;
  };

  export type ApplicationUpdateWithWhereUniqueWithoutJobInput = {
    where: ApplicationWhereUniqueInput;
    data: XOR<
      ApplicationUpdateWithoutJobInput,
      ApplicationUncheckedUpdateWithoutJobInput
    >;
  };

  export type ApplicationUpdateManyWithWhereWithoutJobInput = {
    where: ApplicationScalarWhereInput;
    data: XOR<
      ApplicationUpdateManyMutationInput,
      ApplicationUncheckedUpdateManyWithoutJobInput
    >;
  };

  export type UserCreateWithoutApplicationsInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    role: $Enums.Role;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    jobs?: JobCreateNestedManyWithoutRecruiterInput;
    resumes?: ResumeCreateNestedManyWithoutCandidateInput;
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput;
    notifications?: NotificationCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutApplicationsInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    role: $Enums.Role;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    jobs?: JobUncheckedCreateNestedManyWithoutRecruiterInput;
    resumes?: ResumeUncheckedCreateNestedManyWithoutCandidateInput;
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutApplicationsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutApplicationsInput,
      UserUncheckedCreateWithoutApplicationsInput
    >;
  };

  export type JobCreateWithoutApplicationsInput = {
    id?: string;
    title: string;
    description: string;
    location?: string | null;
    jobType: $Enums.JobType;
    salaryMin?: number | null;
    salaryMax?: number | null;
    skillsRequired?: JobCreateskillsRequiredInput | string[];
    status?: $Enums.JobStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    recruiter: UserCreateNestedOneWithoutJobsInput;
  };

  export type JobUncheckedCreateWithoutApplicationsInput = {
    id?: string;
    recruiterId: string;
    title: string;
    description: string;
    location?: string | null;
    jobType: $Enums.JobType;
    salaryMin?: number | null;
    salaryMax?: number | null;
    skillsRequired?: JobCreateskillsRequiredInput | string[];
    status?: $Enums.JobStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type JobCreateOrConnectWithoutApplicationsInput = {
    where: JobWhereUniqueInput;
    create: XOR<
      JobCreateWithoutApplicationsInput,
      JobUncheckedCreateWithoutApplicationsInput
    >;
  };

  export type UserUpsertWithoutApplicationsInput = {
    update: XOR<
      UserUpdateWithoutApplicationsInput,
      UserUncheckedUpdateWithoutApplicationsInput
    >;
    create: XOR<
      UserCreateWithoutApplicationsInput,
      UserUncheckedCreateWithoutApplicationsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutApplicationsInput,
      UserUncheckedUpdateWithoutApplicationsInput
    >;
  };

  export type UserUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isVerified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    jobs?: JobUpdateManyWithoutRecruiterNestedInput;
    resumes?: ResumeUpdateManyWithoutCandidateNestedInput;
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput;
    notifications?: NotificationUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isVerified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    jobs?: JobUncheckedUpdateManyWithoutRecruiterNestedInput;
    resumes?: ResumeUncheckedUpdateManyWithoutCandidateNestedInput;
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type JobUpsertWithoutApplicationsInput = {
    update: XOR<
      JobUpdateWithoutApplicationsInput,
      JobUncheckedUpdateWithoutApplicationsInput
    >;
    create: XOR<
      JobCreateWithoutApplicationsInput,
      JobUncheckedCreateWithoutApplicationsInput
    >;
    where?: JobWhereInput;
  };

  export type JobUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: JobWhereInput;
    data: XOR<
      JobUpdateWithoutApplicationsInput,
      JobUncheckedUpdateWithoutApplicationsInput
    >;
  };

  export type JobUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    jobType?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType;
    salaryMin?: NullableIntFieldUpdateOperationsInput | number | null;
    salaryMax?: NullableIntFieldUpdateOperationsInput | number | null;
    skillsRequired?: JobUpdateskillsRequiredInput | string[];
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    recruiter?: UserUpdateOneRequiredWithoutJobsNestedInput;
  };

  export type JobUncheckedUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    recruiterId?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    jobType?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType;
    salaryMin?: NullableIntFieldUpdateOperationsInput | number | null;
    salaryMax?: NullableIntFieldUpdateOperationsInput | number | null;
    skillsRequired?: JobUpdateskillsRequiredInput | string[];
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserCreateWithoutResumesInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    role: $Enums.Role;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    jobs?: JobCreateNestedManyWithoutRecruiterInput;
    applications?: ApplicationCreateNestedManyWithoutCandidateInput;
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput;
    notifications?: NotificationCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutResumesInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    role: $Enums.Role;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    jobs?: JobUncheckedCreateNestedManyWithoutRecruiterInput;
    applications?: ApplicationUncheckedCreateNestedManyWithoutCandidateInput;
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutResumesInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutResumesInput,
      UserUncheckedCreateWithoutResumesInput
    >;
  };

  export type UserUpsertWithoutResumesInput = {
    update: XOR<
      UserUpdateWithoutResumesInput,
      UserUncheckedUpdateWithoutResumesInput
    >;
    create: XOR<
      UserCreateWithoutResumesInput,
      UserUncheckedCreateWithoutResumesInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutResumesInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutResumesInput,
      UserUncheckedUpdateWithoutResumesInput
    >;
  };

  export type UserUpdateWithoutResumesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isVerified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    jobs?: JobUpdateManyWithoutRecruiterNestedInput;
    applications?: ApplicationUpdateManyWithoutCandidateNestedInput;
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput;
    notifications?: NotificationUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutResumesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isVerified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    jobs?: JobUncheckedUpdateManyWithoutRecruiterNestedInput;
    applications?: ApplicationUncheckedUpdateManyWithoutCandidateNestedInput;
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateWithoutNotificationsInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    role: $Enums.Role;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    jobs?: JobCreateNestedManyWithoutRecruiterInput;
    applications?: ApplicationCreateNestedManyWithoutCandidateInput;
    resumes?: ResumeCreateNestedManyWithoutCandidateInput;
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    role: $Enums.Role;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    jobs?: JobUncheckedCreateNestedManyWithoutRecruiterInput;
    applications?: ApplicationUncheckedCreateNestedManyWithoutCandidateInput;
    resumes?: ResumeUncheckedCreateNestedManyWithoutCandidateInput;
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutNotificationsInput,
      UserUncheckedCreateWithoutNotificationsInput
    >;
  };

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<
      UserUpdateWithoutNotificationsInput,
      UserUncheckedUpdateWithoutNotificationsInput
    >;
    create: XOR<
      UserCreateWithoutNotificationsInput,
      UserUncheckedCreateWithoutNotificationsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutNotificationsInput,
      UserUncheckedUpdateWithoutNotificationsInput
    >;
  };

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isVerified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    jobs?: JobUpdateManyWithoutRecruiterNestedInput;
    applications?: ApplicationUpdateManyWithoutCandidateNestedInput;
    resumes?: ResumeUpdateManyWithoutCandidateNestedInput;
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isVerified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    jobs?: JobUncheckedUpdateManyWithoutRecruiterNestedInput;
    applications?: ApplicationUncheckedUpdateManyWithoutCandidateNestedInput;
    resumes?: ResumeUncheckedUpdateManyWithoutCandidateNestedInput;
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type JobCreateManyRecruiterInput = {
    id?: string;
    title: string;
    description: string;
    location?: string | null;
    jobType: $Enums.JobType;
    salaryMin?: number | null;
    salaryMax?: number | null;
    skillsRequired?: JobCreateskillsRequiredInput | string[];
    status?: $Enums.JobStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ApplicationCreateManyCandidateInput = {
    id?: string;
    jobId: string;
    resumeUrl?: string | null;
    status?: $Enums.ApplicationStatus;
    coverLetter?: string | null;
    atsScore?: number | null;
    appliedAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ResumeCreateManyCandidateInput = {
    id?: string;
    s3Key: string;
    fileName?: string | null;
    parsedName?: string | null;
    parsedEmail?: string | null;
    parsedSkills?: ResumeCreateparsedSkillsInput | string[];
    rawText?: string | null;
    parseStatus?: $Enums.ParseStatus;
    uploadedAt?: Date | string;
  };

  export type RefreshTokenCreateManyUserInput = {
    id?: string;
    token: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
  };

  export type NotificationCreateManyUserInput = {
    id?: string;
    type: $Enums.NotificationType;
    payload: JsonNullValueInput | InputJsonValue;
    sent?: boolean;
    createdAt?: Date | string;
  };

  export type JobUpdateWithoutRecruiterInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    jobType?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType;
    salaryMin?: NullableIntFieldUpdateOperationsInput | number | null;
    salaryMax?: NullableIntFieldUpdateOperationsInput | number | null;
    skillsRequired?: JobUpdateskillsRequiredInput | string[];
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    applications?: ApplicationUpdateManyWithoutJobNestedInput;
  };

  export type JobUncheckedUpdateWithoutRecruiterInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    jobType?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType;
    salaryMin?: NullableIntFieldUpdateOperationsInput | number | null;
    salaryMax?: NullableIntFieldUpdateOperationsInput | number | null;
    skillsRequired?: JobUpdateskillsRequiredInput | string[];
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    applications?: ApplicationUncheckedUpdateManyWithoutJobNestedInput;
  };

  export type JobUncheckedUpdateManyWithoutRecruiterInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    jobType?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType;
    salaryMin?: NullableIntFieldUpdateOperationsInput | number | null;
    salaryMax?: NullableIntFieldUpdateOperationsInput | number | null;
    skillsRequired?: JobUpdateskillsRequiredInput | string[];
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ApplicationUpdateWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    status?:
      | EnumApplicationStatusFieldUpdateOperationsInput
      | $Enums.ApplicationStatus;
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null;
    atsScore?: NullableIntFieldUpdateOperationsInput | number | null;
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    job?: JobUpdateOneRequiredWithoutApplicationsNestedInput;
  };

  export type ApplicationUncheckedUpdateWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    jobId?: StringFieldUpdateOperationsInput | string;
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    status?:
      | EnumApplicationStatusFieldUpdateOperationsInput
      | $Enums.ApplicationStatus;
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null;
    atsScore?: NullableIntFieldUpdateOperationsInput | number | null;
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ApplicationUncheckedUpdateManyWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    jobId?: StringFieldUpdateOperationsInput | string;
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    status?:
      | EnumApplicationStatusFieldUpdateOperationsInput
      | $Enums.ApplicationStatus;
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null;
    atsScore?: NullableIntFieldUpdateOperationsInput | number | null;
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ResumeUpdateWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    s3Key?: StringFieldUpdateOperationsInput | string;
    fileName?: NullableStringFieldUpdateOperationsInput | string | null;
    parsedName?: NullableStringFieldUpdateOperationsInput | string | null;
    parsedEmail?: NullableStringFieldUpdateOperationsInput | string | null;
    parsedSkills?: ResumeUpdateparsedSkillsInput | string[];
    rawText?: NullableStringFieldUpdateOperationsInput | string | null;
    parseStatus?:
      | EnumParseStatusFieldUpdateOperationsInput
      | $Enums.ParseStatus;
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ResumeUncheckedUpdateWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    s3Key?: StringFieldUpdateOperationsInput | string;
    fileName?: NullableStringFieldUpdateOperationsInput | string | null;
    parsedName?: NullableStringFieldUpdateOperationsInput | string | null;
    parsedEmail?: NullableStringFieldUpdateOperationsInput | string | null;
    parsedSkills?: ResumeUpdateparsedSkillsInput | string[];
    rawText?: NullableStringFieldUpdateOperationsInput | string | null;
    parseStatus?:
      | EnumParseStatusFieldUpdateOperationsInput
      | $Enums.ParseStatus;
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ResumeUncheckedUpdateManyWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    s3Key?: StringFieldUpdateOperationsInput | string;
    fileName?: NullableStringFieldUpdateOperationsInput | string | null;
    parsedName?: NullableStringFieldUpdateOperationsInput | string | null;
    parsedEmail?: NullableStringFieldUpdateOperationsInput | string | null;
    parsedSkills?: ResumeUpdateparsedSkillsInput | string[];
    rawText?: NullableStringFieldUpdateOperationsInput | string | null;
    parseStatus?:
      | EnumParseStatusFieldUpdateOperationsInput
      | $Enums.ParseStatus;
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RefreshTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?:
      | EnumNotificationTypeFieldUpdateOperationsInput
      | $Enums.NotificationType;
    payload?: JsonNullValueInput | InputJsonValue;
    sent?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?:
      | EnumNotificationTypeFieldUpdateOperationsInput
      | $Enums.NotificationType;
    payload?: JsonNullValueInput | InputJsonValue;
    sent?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?:
      | EnumNotificationTypeFieldUpdateOperationsInput
      | $Enums.NotificationType;
    payload?: JsonNullValueInput | InputJsonValue;
    sent?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ApplicationCreateManyJobInput = {
    id?: string;
    candidateId: string;
    resumeUrl?: string | null;
    status?: $Enums.ApplicationStatus;
    coverLetter?: string | null;
    atsScore?: number | null;
    appliedAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ApplicationUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string;
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    status?:
      | EnumApplicationStatusFieldUpdateOperationsInput
      | $Enums.ApplicationStatus;
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null;
    atsScore?: NullableIntFieldUpdateOperationsInput | number | null;
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    candidate?: UserUpdateOneRequiredWithoutApplicationsNestedInput;
  };

  export type ApplicationUncheckedUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string;
    candidateId?: StringFieldUpdateOperationsInput | string;
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    status?:
      | EnumApplicationStatusFieldUpdateOperationsInput
      | $Enums.ApplicationStatus;
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null;
    atsScore?: NullableIntFieldUpdateOperationsInput | number | null;
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ApplicationUncheckedUpdateManyWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string;
    candidateId?: StringFieldUpdateOperationsInput | string;
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    status?:
      | EnumApplicationStatusFieldUpdateOperationsInput
      | $Enums.ApplicationStatus;
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null;
    atsScore?: NullableIntFieldUpdateOperationsInput | number | null;
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}

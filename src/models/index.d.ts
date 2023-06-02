import {
  ModelInit,
  MutableModel,
  __modelMeta__,
  ManagedIdentifier,
} from "@aws-amplify/datastore";

import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type EagerIpfsStorage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<IpfsStorage, "id">;
    readOnlyFields: "createdAt" | "updatedAt";
  };
  readonly id: string;
  readonly address?: string | null;
  readonly origin_ipfs_url?: string | null;
  readonly public_ipfs_url?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyIpfsStorage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<IpfsStorage, "id">;
    readOnlyFields: "createdAt" | "updatedAt";
  };
  readonly id: string;
  readonly address?: string | null;
  readonly origin_ipfs_url?: string | null;
  readonly public_ipfs_url?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type IpfsStorage = LazyLoading extends LazyLoadingDisabled
  ? EagerIpfsStorage
  : LazyIpfsStorage;

export declare const IpfsStorage: (new (
  init: ModelInit<IpfsStorage>
) => IpfsStorage) & {
  copyOf(
    source: IpfsStorage,
    mutator: (
      draft: MutableModel<IpfsStorage>
    ) => MutableModel<IpfsStorage> | void
  ): IpfsStorage;
};

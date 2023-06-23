import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerArrival = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Arrival, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly B_OrderNumber?: number | null;
  readonly E_Date?: string | null;
  readonly G_SupplierCode?: number | null;
  readonly H_supplier?: string | null;
  readonly L_ItemCode?: number | null;
  readonly M_ItemName?: string | null;
  readonly R_qaunty?: number | null;
  readonly T_unit?: string | null;
  readonly AB_detail1?: string | null;
  readonly AC_detail2?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyArrival = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Arrival, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly B_OrderNumber?: number | null;
  readonly E_Date?: string | null;
  readonly G_SupplierCode?: number | null;
  readonly H_supplier?: string | null;
  readonly L_ItemCode?: number | null;
  readonly M_ItemName?: string | null;
  readonly R_qaunty?: number | null;
  readonly T_unit?: string | null;
  readonly AB_detail1?: string | null;
  readonly AC_detail2?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Arrival = LazyLoading extends LazyLoadingDisabled ? EagerArrival : LazyArrival

export declare const Arrival: (new (init: ModelInit<Arrival>) => Arrival) & {
  copyOf(source: Arrival, mutator: (draft: MutableModel<Arrival>) => MutableModel<Arrival> | void): Arrival;
}

type EagerHome = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Home, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly languageofflower?: string | null;
  readonly name?: string | null;
  readonly img?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHome = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Home, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly languageofflower?: string | null;
  readonly name?: string | null;
  readonly img?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Home = LazyLoading extends LazyLoadingDisabled ? EagerHome : LazyHome

export declare const Home: (new (init: ModelInit<Home>) => Home) & {
  copyOf(source: Home, mutator: (draft: MutableModel<Home>) => MutableModel<Home> | void): Home;
}
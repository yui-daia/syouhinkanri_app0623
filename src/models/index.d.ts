import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type TodosMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerTodos = {
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTodos = {
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Todos = LazyLoading extends LazyLoadingDisabled ? EagerTodos : LazyTodos

export declare const Todos: (new (init: ModelInit<Todos, TodosMetaData>) => Todos) & {
  copyOf(source: Todos, mutator: (draft: MutableModel<Todos, TodosMetaData>) => MutableModel<Todos, TodosMetaData> | void): Todos;
}
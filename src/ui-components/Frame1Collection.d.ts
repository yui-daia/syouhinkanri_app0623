/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Frame1Props } from "./Frame1";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Frame1CollectionOverridesProps = {
    Frame1Collection?: PrimitiveOverrideProps<CollectionProps>;
    Frame1?: Frame1Props;
} & EscapeHatchProps;
export declare type Frame1CollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => Frame1Props;
} & {
    overrides?: Frame1CollectionOverridesProps | undefined | null;
}>;
export default function Frame1Collection(props: Frame1CollectionProps): React.ReactElement;

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Group1OverridesProps = {
    Group1?: PrimitiveOverrideProps<ViewProps>;
    "Component 1"?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type Group1Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Group1OverridesProps | undefined | null;
}>;
export default function Group1(props: Group1Props): React.ReactElement;

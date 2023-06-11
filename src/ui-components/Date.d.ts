/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DateOverridesProps = {
    Date?: PrimitiveOverrideProps<ViewProps>;
    "2023-05-12\uFF08\u91D1\uFF09"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type DateProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: DateOverridesProps | undefined | null;
}>;
export default function Date(props: DateProps): React.ReactElement;

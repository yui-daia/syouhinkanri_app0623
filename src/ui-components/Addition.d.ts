/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AdditionOverridesProps = {
    Addition?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 7"?: PrimitiveOverrideProps<ViewProps>;
    "\u8FFD\u52A0"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type AdditionProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: AdditionOverridesProps | undefined | null;
}>;
export default function Addition(props: AdditionProps): React.ReactElement;

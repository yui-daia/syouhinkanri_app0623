/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Login1OverridesProps = {
    Login1?: PrimitiveOverrideProps<ViewProps>;
    "\u30ED\u30B0\u30A4\u30F3\u30DC\u30BF\u30F3"?: PrimitiveOverrideProps<IconProps>;
    "\u30ED\u30B0\u30A4\u30F3"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Login1Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Login1OverridesProps | undefined | null;
}>;
export default function Login1(props: Login1Props): React.ReactElement;

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LogoutOverridesProps = {
    Logout?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 5"?: PrimitiveOverrideProps<IconProps>;
    "\u30ED\u30B0\u30A2\u30A6\u30C8"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type LogoutProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: LogoutOverridesProps | undefined | null;
}>;
export default function Logout(props: LogoutProps): React.ReactElement;

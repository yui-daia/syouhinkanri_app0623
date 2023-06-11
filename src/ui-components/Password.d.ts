/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PasswordOverridesProps = {
    Password?: PrimitiveOverrideProps<ViewProps>;
    "\u30D1\u30B9\u30EF\u30FC\u30C9"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 3"?: PrimitiveOverrideProps<ViewProps>;
    "Yu580514!"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type PasswordProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: PasswordOverridesProps | undefined | null;
}>;
export default function Password(props: PasswordProps): React.ReactElement;

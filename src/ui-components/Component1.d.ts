/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Component1OverridesProps = {
    Component1?: PrimitiveOverrideProps<FlexProps>;
    header?: PrimitiveOverrideProps<ViewProps>;
    logo2?: PrimitiveOverrideProps<ViewProps>;
    "\u682A\u5F0F\u4F1A\u793E"?: PrimitiveOverrideProps<TextProps>;
    "\u5927\u4E9C"?: PrimitiveOverrideProps<TextProps>;
    "\u25C7\u25C6\u30AB\u30E9\u30FC\u4E8B\u696D\u90E8\u25C6\u25C7"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Component1Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: Component1OverridesProps | undefined | null;
}>;
export default function Component1(props: Component1Props): React.ReactElement;

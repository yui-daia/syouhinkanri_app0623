/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Home } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Frame1OverridesProps = {
    Frame1?: PrimitiveOverrideProps<ViewProps>;
    Component?: PrimitiveOverrideProps<ViewProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "\u540D\u524D"?: PrimitiveOverrideProps<TextProps>;
    "\u61F8\u8CDE\u91D1"?: PrimitiveOverrideProps<TextProps>;
    Bounty?: PrimitiveOverrideProps<TextProps>;
    birthday?: PrimitiveOverrideProps<TextProps>;
    "\u8A95\u751F\u65E5"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Frame1Props = React.PropsWithChildren<Partial<ViewProps> & {
    home?: Home;
} & {
    overrides?: Frame1OverridesProps | undefined | null;
}>;
export default function Frame1(props: Frame1Props): React.ReactElement;

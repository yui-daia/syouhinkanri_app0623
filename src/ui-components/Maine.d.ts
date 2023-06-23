/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MaineOverridesProps = {
    Maine?: PrimitiveOverrideProps<ViewProps>;
    "\u30E1\u30A4\u30F3\u3078\u623B\u308B\u30DC\u30BF\u30F3"?: PrimitiveOverrideProps<IconProps>;
    "\u30E1\u30A4\u30F3\u3078\u623B\u308B"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MaineProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: MaineOverridesProps | undefined | null;
}>;
export default function Maine(props: MaineProps): React.ReactElement;

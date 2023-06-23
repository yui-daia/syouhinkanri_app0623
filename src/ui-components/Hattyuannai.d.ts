/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HattyuannaiOverridesProps = {
    Hattyuannai?: PrimitiveOverrideProps<ViewProps>;
    "\u767A\u6CE8\u6848\u5185\u30DC\u30BF\u30F3"?: PrimitiveOverrideProps<IconProps>;
    "\u767A\u6CE8\u6848\u5185"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type HattyuannaiProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: HattyuannaiOverridesProps | undefined | null;
}>;
export default function Hattyuannai(props: HattyuannaiProps): React.ReactElement;

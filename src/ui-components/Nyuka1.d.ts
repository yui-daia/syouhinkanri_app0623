/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Nyuka1OverridesProps = {
    Nyuka1?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 4"?: PrimitiveOverrideProps<IconProps>;
    nyuka_annai?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Nyuka1Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Nyuka1OverridesProps | undefined | null;
}>;
export default function Nyuka1(props: Nyuka1Props): React.ReactElement;

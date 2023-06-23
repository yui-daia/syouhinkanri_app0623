/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PassinputOverridesProps = {
    Passinput?: PrimitiveOverrideProps<ViewProps>;
    "PW\u5165\u529B"?: PrimitiveOverrideProps<ViewProps>;
    "\u30D1\u30B9\u30EF\u30FC\u30C9"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type PassinputProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: PassinputOverridesProps | undefined | null;
}>;
export default function Passinput(props: PassinputProps): React.ReactElement;

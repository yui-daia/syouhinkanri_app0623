/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type KeppinOverridesProps = {
    Keppin?: PrimitiveOverrideProps<ViewProps>;
    "\u67A0\uFF08\u6B20\u54C1\u6848\u5185\uFF09"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type KeppinProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: KeppinOverridesProps | undefined | null;
}>;
export default function Keppin(props: KeppinProps): React.ReactElement;

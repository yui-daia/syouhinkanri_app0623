/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SyouhinkanriOverridesProps = {
    Syouhinkanri?: PrimitiveOverrideProps<ViewProps>;
    "\u5546\u54C1\u7BA1\u7406"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type SyouhinkanriProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SyouhinkanriOverridesProps | undefined | null;
}>;
export default function Syouhinkanri(props: SyouhinkanriProps): React.ReactElement;

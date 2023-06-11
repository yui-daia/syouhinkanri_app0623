/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DailyreporttoolOverridesProps = {
    Dailyreporttool?: PrimitiveOverrideProps<ViewProps>;
    "\u65E5\u5831\u30C4\u30FC\u30EB"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type DailyreporttoolProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: DailyreporttoolOverridesProps | undefined | null;
}>;
export default function Dailyreporttool(props: DailyreporttoolProps): React.ReactElement;

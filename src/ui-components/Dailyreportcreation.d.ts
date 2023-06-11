/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DailyreportcreationOverridesProps = {
    Dailyreportcreation?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 5"?: PrimitiveOverrideProps<IconProps>;
    "\u65E5\u5831\u4F5C\u6210"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type DailyreportcreationProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: DailyreportcreationOverridesProps | undefined | null;
}>;
export default function Dailyreportcreation(props: DailyreportcreationProps): React.ReactElement;

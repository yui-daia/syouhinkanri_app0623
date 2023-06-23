/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ABdetail1OverridesProps = {
    ABdetail1?: PrimitiveOverrideProps<ViewProps>;
    AB_detail1?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type ABdetail1Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ABdetail1OverridesProps | undefined | null;
}>;
export default function ABdetail1(props: ABdetail1Props): React.ReactElement;

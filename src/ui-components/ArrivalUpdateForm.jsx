/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Arrival } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ArrivalUpdateForm(props) {
  const {
    id: idProp,
    arrival: arrivalModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    B_OrderNumber: "",
    E_Date: "",
    G_SupplierCode: "",
    H_supplier: "",
    L_ItemCode: "",
    M_ItemName: "",
    R_qaunty: "",
    T_unit: "",
    AB_detail1: "",
    AC_detail2: "",
  };
  const [B_OrderNumber, setB_OrderNumber] = React.useState(
    initialValues.B_OrderNumber
  );
  const [E_Date, setE_Date] = React.useState(initialValues.E_Date);
  const [G_SupplierCode, setG_SupplierCode] = React.useState(
    initialValues.G_SupplierCode
  );
  const [H_supplier, setH_supplier] = React.useState(initialValues.H_supplier);
  const [L_ItemCode, setL_ItemCode] = React.useState(initialValues.L_ItemCode);
  const [M_ItemName, setM_ItemName] = React.useState(initialValues.M_ItemName);
  const [R_qaunty, setR_qaunty] = React.useState(initialValues.R_qaunty);
  const [T_unit, setT_unit] = React.useState(initialValues.T_unit);
  const [AB_detail1, setAB_detail1] = React.useState(initialValues.AB_detail1);
  const [AC_detail2, setAC_detail2] = React.useState(initialValues.AC_detail2);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = arrivalRecord
      ? { ...initialValues, ...arrivalRecord }
      : initialValues;
    setB_OrderNumber(cleanValues.B_OrderNumber);
    setE_Date(cleanValues.E_Date);
    setG_SupplierCode(cleanValues.G_SupplierCode);
    setH_supplier(cleanValues.H_supplier);
    setL_ItemCode(cleanValues.L_ItemCode);
    setM_ItemName(cleanValues.M_ItemName);
    setR_qaunty(cleanValues.R_qaunty);
    setT_unit(cleanValues.T_unit);
    setAB_detail1(cleanValues.AB_detail1);
    setAC_detail2(cleanValues.AC_detail2);
    setErrors({});
  };
  const [arrivalRecord, setArrivalRecord] = React.useState(arrivalModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Arrival, idProp)
        : arrivalModelProp;
      setArrivalRecord(record);
    };
    queryData();
  }, [idProp, arrivalModelProp]);
  React.useEffect(resetStateValues, [arrivalRecord]);
  const validations = {
    B_OrderNumber: [],
    E_Date: [],
    G_SupplierCode: [],
    H_supplier: [],
    L_ItemCode: [],
    M_ItemName: [],
    R_qaunty: [],
    T_unit: [],
    AB_detail1: [],
    AC_detail2: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          B_OrderNumber,
          E_Date,
          G_SupplierCode,
          H_supplier,
          L_ItemCode,
          M_ItemName,
          R_qaunty,
          T_unit,
          AB_detail1,
          AC_detail2,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Arrival.copyOf(arrivalRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ArrivalUpdateForm")}
      {...rest}
    >
      <TextField
        label="B order number"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={B_OrderNumber}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              B_OrderNumber: value,
              E_Date,
              G_SupplierCode,
              H_supplier,
              L_ItemCode,
              M_ItemName,
              R_qaunty,
              T_unit,
              AB_detail1,
              AC_detail2,
            };
            const result = onChange(modelFields);
            value = result?.B_OrderNumber ?? value;
          }
          if (errors.B_OrderNumber?.hasError) {
            runValidationTasks("B_OrderNumber", value);
          }
          setB_OrderNumber(value);
        }}
        onBlur={() => runValidationTasks("B_OrderNumber", B_OrderNumber)}
        errorMessage={errors.B_OrderNumber?.errorMessage}
        hasError={errors.B_OrderNumber?.hasError}
        {...getOverrideProps(overrides, "B_OrderNumber")}
      ></TextField>
      <TextField
        label="E date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={E_Date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              B_OrderNumber,
              E_Date: value,
              G_SupplierCode,
              H_supplier,
              L_ItemCode,
              M_ItemName,
              R_qaunty,
              T_unit,
              AB_detail1,
              AC_detail2,
            };
            const result = onChange(modelFields);
            value = result?.E_Date ?? value;
          }
          if (errors.E_Date?.hasError) {
            runValidationTasks("E_Date", value);
          }
          setE_Date(value);
        }}
        onBlur={() => runValidationTasks("E_Date", E_Date)}
        errorMessage={errors.E_Date?.errorMessage}
        hasError={errors.E_Date?.hasError}
        {...getOverrideProps(overrides, "E_Date")}
      ></TextField>
      <TextField
        label="G supplier code"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={G_SupplierCode}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              B_OrderNumber,
              E_Date,
              G_SupplierCode: value,
              H_supplier,
              L_ItemCode,
              M_ItemName,
              R_qaunty,
              T_unit,
              AB_detail1,
              AC_detail2,
            };
            const result = onChange(modelFields);
            value = result?.G_SupplierCode ?? value;
          }
          if (errors.G_SupplierCode?.hasError) {
            runValidationTasks("G_SupplierCode", value);
          }
          setG_SupplierCode(value);
        }}
        onBlur={() => runValidationTasks("G_SupplierCode", G_SupplierCode)}
        errorMessage={errors.G_SupplierCode?.errorMessage}
        hasError={errors.G_SupplierCode?.hasError}
        {...getOverrideProps(overrides, "G_SupplierCode")}
      ></TextField>
      <TextField
        label="H supplier"
        isRequired={false}
        isReadOnly={false}
        value={H_supplier}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              B_OrderNumber,
              E_Date,
              G_SupplierCode,
              H_supplier: value,
              L_ItemCode,
              M_ItemName,
              R_qaunty,
              T_unit,
              AB_detail1,
              AC_detail2,
            };
            const result = onChange(modelFields);
            value = result?.H_supplier ?? value;
          }
          if (errors.H_supplier?.hasError) {
            runValidationTasks("H_supplier", value);
          }
          setH_supplier(value);
        }}
        onBlur={() => runValidationTasks("H_supplier", H_supplier)}
        errorMessage={errors.H_supplier?.errorMessage}
        hasError={errors.H_supplier?.hasError}
        {...getOverrideProps(overrides, "H_supplier")}
      ></TextField>
      <TextField
        label="L item code"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={L_ItemCode}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              B_OrderNumber,
              E_Date,
              G_SupplierCode,
              H_supplier,
              L_ItemCode: value,
              M_ItemName,
              R_qaunty,
              T_unit,
              AB_detail1,
              AC_detail2,
            };
            const result = onChange(modelFields);
            value = result?.L_ItemCode ?? value;
          }
          if (errors.L_ItemCode?.hasError) {
            runValidationTasks("L_ItemCode", value);
          }
          setL_ItemCode(value);
        }}
        onBlur={() => runValidationTasks("L_ItemCode", L_ItemCode)}
        errorMessage={errors.L_ItemCode?.errorMessage}
        hasError={errors.L_ItemCode?.hasError}
        {...getOverrideProps(overrides, "L_ItemCode")}
      ></TextField>
      <TextField
        label="M item name"
        isRequired={false}
        isReadOnly={false}
        value={M_ItemName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              B_OrderNumber,
              E_Date,
              G_SupplierCode,
              H_supplier,
              L_ItemCode,
              M_ItemName: value,
              R_qaunty,
              T_unit,
              AB_detail1,
              AC_detail2,
            };
            const result = onChange(modelFields);
            value = result?.M_ItemName ?? value;
          }
          if (errors.M_ItemName?.hasError) {
            runValidationTasks("M_ItemName", value);
          }
          setM_ItemName(value);
        }}
        onBlur={() => runValidationTasks("M_ItemName", M_ItemName)}
        errorMessage={errors.M_ItemName?.errorMessage}
        hasError={errors.M_ItemName?.hasError}
        {...getOverrideProps(overrides, "M_ItemName")}
      ></TextField>
      <TextField
        label="R qaunty"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={R_qaunty}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              B_OrderNumber,
              E_Date,
              G_SupplierCode,
              H_supplier,
              L_ItemCode,
              M_ItemName,
              R_qaunty: value,
              T_unit,
              AB_detail1,
              AC_detail2,
            };
            const result = onChange(modelFields);
            value = result?.R_qaunty ?? value;
          }
          if (errors.R_qaunty?.hasError) {
            runValidationTasks("R_qaunty", value);
          }
          setR_qaunty(value);
        }}
        onBlur={() => runValidationTasks("R_qaunty", R_qaunty)}
        errorMessage={errors.R_qaunty?.errorMessage}
        hasError={errors.R_qaunty?.hasError}
        {...getOverrideProps(overrides, "R_qaunty")}
      ></TextField>
      <TextField
        label="T unit"
        isRequired={false}
        isReadOnly={false}
        value={T_unit}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              B_OrderNumber,
              E_Date,
              G_SupplierCode,
              H_supplier,
              L_ItemCode,
              M_ItemName,
              R_qaunty,
              T_unit: value,
              AB_detail1,
              AC_detail2,
            };
            const result = onChange(modelFields);
            value = result?.T_unit ?? value;
          }
          if (errors.T_unit?.hasError) {
            runValidationTasks("T_unit", value);
          }
          setT_unit(value);
        }}
        onBlur={() => runValidationTasks("T_unit", T_unit)}
        errorMessage={errors.T_unit?.errorMessage}
        hasError={errors.T_unit?.hasError}
        {...getOverrideProps(overrides, "T_unit")}
      ></TextField>
      <TextField
        label="Ab detail1"
        isRequired={false}
        isReadOnly={false}
        value={AB_detail1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              B_OrderNumber,
              E_Date,
              G_SupplierCode,
              H_supplier,
              L_ItemCode,
              M_ItemName,
              R_qaunty,
              T_unit,
              AB_detail1: value,
              AC_detail2,
            };
            const result = onChange(modelFields);
            value = result?.AB_detail1 ?? value;
          }
          if (errors.AB_detail1?.hasError) {
            runValidationTasks("AB_detail1", value);
          }
          setAB_detail1(value);
        }}
        onBlur={() => runValidationTasks("AB_detail1", AB_detail1)}
        errorMessage={errors.AB_detail1?.errorMessage}
        hasError={errors.AB_detail1?.hasError}
        {...getOverrideProps(overrides, "AB_detail1")}
      ></TextField>
      <TextField
        label="Ac detail2"
        isRequired={false}
        isReadOnly={false}
        value={AC_detail2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              B_OrderNumber,
              E_Date,
              G_SupplierCode,
              H_supplier,
              L_ItemCode,
              M_ItemName,
              R_qaunty,
              T_unit,
              AB_detail1,
              AC_detail2: value,
            };
            const result = onChange(modelFields);
            value = result?.AC_detail2 ?? value;
          }
          if (errors.AC_detail2?.hasError) {
            runValidationTasks("AC_detail2", value);
          }
          setAC_detail2(value);
        }}
        onBlur={() => runValidationTasks("AC_detail2", AC_detail2)}
        errorMessage={errors.AC_detail2?.errorMessage}
        hasError={errors.AC_detail2?.hasError}
        {...getOverrideProps(overrides, "AC_detail2")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || arrivalModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || arrivalModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

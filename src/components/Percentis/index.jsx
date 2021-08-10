import React from "react";

import { StyledPercentis } from "./styles";
import { colors, percentisControle } from "../../services";

function Percentis({ data, value }) {
  console.log(data, value);
  const [percentage, setPercentage] = React.useState();

  if (percentisControle.find((percent) => percent.var === data)) {
    const arr = percentisControle.find((percent) => percent.var === data);

    if (value < arr.p1) {
      setPercentage(() => (
        <StyledPercentis background={colors.red}>{`< p1`}</StyledPercentis>
      ));
    } else if (value >= arr.p1 && value <= arr.p5) {
      setPercentage(() => (
        <StyledPercentis background={colors.yellow}>p1-p5</StyledPercentis>
      ));
    } else if (value >= arr.p5 && value <= arr.p10) {
      setPercentage(() => (
        <StyledPercentis background={colors.orange}>p5-p10</StyledPercentis>
      ));
    } else if (value >= arr.p10 && value <= arr.p25) {
      setPercentage(() => (
        <StyledPercentis background={colors.green}>p10-p25</StyledPercentis>
      ));
    } else if (value >= arr.p25 && value <= arr.p50) {
      setPercentage(() => (
        <StyledPercentis background={colors.green}>p25-p50</StyledPercentis>
      ));
    } else if (value >= arr.p50 && value <= arr.p75) {
      setPercentage(() => (
        <StyledPercentis background={colors.green}>p50-p75</StyledPercentis>
      ));
    } else if (value >= arr.p75 && value <= arr.p90) {
      setPercentage(() => (
        <StyledPercentis background={colors.green}>p75-p90</StyledPercentis>
      ));
    } else if (value >= arr.p90 && value <= arr.p95) {
      setPercentage(() => (
        <StyledPercentis background={colors.green}>p90-p95</StyledPercentis>
      ));
    } else if (value >= arr.p95 && value <= arr.p99) {
      setPercentage(() => (
        <StyledPercentis background={colors.white}>p95-p99</StyledPercentis>
      ));
    }
  }

  return <>{percentage}</>;
}

export default Percentis;

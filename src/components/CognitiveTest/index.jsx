import React from "react";
import { Button } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Container, Form, Box, Break } from "./styles";
import { CognitiveTestContext } from "../../context/cognitiveTestContext";
import { Route, Link, BrowserRouter } from "react-router-dom";
import { OctData } from "..";

function CognitiveTest({ history }) {
  const { cognitiveTest, setCognitiveTest } =
    React.useContext(CognitiveTestContext);
  console.log(cognitiveTest);
  return (
    <Container>
      <label>Please, enter the patient data:</label>
      <Form>
        <Box>
          <label>Physician:</label>
          <input
            type="text"
            onChange={(event) => {
              const value = event.target.value;
              setCognitiveTest({
                physician: value,
              });
            }}
          />
        </Box>
        <Box>
          <label>Patient:</label>
          <input
            type="text"
            onChange={(event) => {
              const value = event.target.value;
              setCognitiveTest({
                patient: value,
              });
            }}
          />
        </Box>
        <Box>
          <label>ID number:</label>
          <input
            type="text"
            onChange={(event) => {
              const value = event.target.value;
              setCognitiveTest({
                idNumber: value,
              });
            }}
          />
        </Box>
        <Box>
          <label>Sex:</label>
          <input
            type="text"
            onChange={(event) => {
              const value = event.target.value;
              setCognitiveTest({
                sex: value,
              });
            }}
          />
          <label> Age:</label>
          <input
            type="text"
            onChange={(event) => {
              const value = event.target.value;
              setCognitiveTest({
                age: value,
              });
            }}
          />
        </Box>
        <Box>
          <label>Diagnosis:</label>
          <FormControl fullWidth variant="outlined">
            <Select
              labelId="demo-simple-select-error-label"
              id="demo-simple-select-error"
              value={"Please select the Diagnosis"}
              renderValue={(value) => `${value}`}
              onChange={(event) => {
                const value = event.target.value;
                setCognitiveTest({
                  diagnosis: value,
                });
              }}
            >
              <MenuItem value="" disabled>
                <em>Please select the Diagnosis:</em>
              </MenuItem>
              <MenuItem value={"Dementia"}>Dementia</MenuItem>
              <MenuItem value={"Parkinson's disease"}>
                Parkinson's disease
              </MenuItem>
              <MenuItem value={"Mild cognitive impairment"}>
                Mild cognitive impairment
              </MenuItem>
              <MenuItem value={"Alzheimer's disease"}>
                Alzheimer's disease
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <label>Cognitive test A:</label>
          <input
            type="text"
            onChange={(event) => {
              const value = event.target.value;
              setCognitiveTest({
                cognitiveTestA: value,
              });
            }}
          />
        </Box>
        <Box>
          <label>Score value:</label>
          <input
            type="text"
            onChange={(event) => {
              const value = event.target.value;
              setCognitiveTest({
                scoreA: value,
              });
            }}
          />
        </Box>
        <Box>
          <label>Cognitive test B:</label>
          <input
            type="text"
            onChange={(event) => {
              const value = event.target.value;
              setCognitiveTest({
                cognitiveTestB: value,
              });
            }}
          />
        </Box>
        <Box>
          <label>Score value:</label>
          <input
            type="text"
            onChange={(event) => {
              const value = event.target.value;
              setCognitiveTest({
                scoreB: value,
              });
            }}
          />
        </Box>
        <Box>
          <label>Ocular disease:</label>
          <input
            type="text"
            onChange={(event) => {
              const value = event.target.value;
              setCognitiveTest({
                ocularDisease: value,
              });
            }}
          />
        </Box>
        <Box>
          <label>OCT model:</label>
          <input
            type="text"
            onChange={(event) => {
              const value = event.target.value;
              setCognitiveTest({
                octModel: value,
              });
            }}
          />
        </Box>
      </Form>
      <Break />

      <BrowserRouter>
        <Link to="/oct_data">
          <Button variant="contained" color="primary" href="#contained-buttons">
            OCT data
          </Button>
        </Link>

        <Route path="/oct_data" component={OctData} />
      </BrowserRouter>
    </Container>
  );
}

export default CognitiveTest;

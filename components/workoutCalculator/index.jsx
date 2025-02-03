"use client";
import { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

export default function WorkoutCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [activity, setActivity] = useState(1.2);
  const [bmi, setBmi] = useState(null);
  const [tdee, setTdee] = useState(null);
  const [protein, setProtein] = useState(null);
  const [carbs, setCarbs] = useState(null);
  const [fats, setFats] = useState(null);
  const [liftWeight, setLiftWeight] = useState("");
  const [reps, setReps] = useState("");
  const [oneRepMax, setOneRepMax] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height * 0.0254;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);
    }
  };

  const calculateTDEE = () => {
    if (weight && height && age) {
      const heightInCm = height * 2.54;
      const bmr =
        gender === "male"
          ? 88.36 + 13.4 * weight + 4.8 * heightInCm - 5.7 * age
          : 447.6 + 9.2 * weight + 3.1 * heightInCm - 4.3 * age;
      const tdeeValue = (bmr * activity).toFixed(0);
      setTdee(tdeeValue);
      calculateMacros(tdeeValue);
    }
  };

  const calculateMacros = (tdee) => {
    setProtein((tdee * 0.3 / 4).toFixed(1));
    setCarbs((tdee * 0.5 / 4).toFixed(1));
    setFats((tdee * 0.2 / 9).toFixed(1));
  };

  const calculateOneRepMax = () => {
    if (liftWeight && reps) {
      const orm = (liftWeight * (1 + reps / 30)).toFixed(1);
      setOneRepMax(orm);
    }
  };

  return (
    <Container className="py-5">
      <h2 className="text-center fw-bold mb-4" style={{ color: "#f1ffc4" }}>
        Workout Calculator
      </h2>
      <Row className="justify-content-center">
        <Col md={4}>
          <Card className="p-4 shadow-lg" style={{ backgroundColor: "#5d576b", color: "#f1ffc4" }}>
            <h4 className="text-center">BMI Calculator</h4>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Weight (lbs)</Form.Label>
                <Form.Control type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Height (inches)</Form.Label>
                <Form.Control type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
              </Form.Group>
              <Button className="w-100" style={{ backgroundColor: "#8884ff", border: "none" }} onClick={calculateBMI}>
                Calculate BMI
              </Button>
            </Form>
            {bmi && <p className="mt-3 text-center">Your BMI: <strong>{bmi}</strong></p>}
          </Card>
        </Col>

        <Col md={4}>
          <Card className="p-4 shadow-lg" style={{ backgroundColor: "#5d576b", color: "#f1ffc4" }}>
            <h4 className="text-center">TDEE & Macros</h4>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" value={age} onChange={(e) => setAge(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Activity Level</Form.Label>
                <Form.Select value={activity} onChange={(e) => setActivity(parseFloat(e.target.value))}>
                  <option value="1.2">Sedentary</option>
                  <option value="1.375">Light Exercise</option>
                  <option value="1.55">Moderate Exercise</option>
                  <option value="1.725">Heavy Exercise</option>
                  <option value="1.9">Athlete</option>
                </Form.Select>
              </Form.Group>
              <Button className="w-100" style={{ backgroundColor: "#8884ff", border: "none" }} onClick={calculateTDEE}>
                Calculate TDEE
              </Button>
            </Form>
            {tdee && <p className="mt-3 text-center">Your TDEE: <strong>{tdee} kcal/day</strong></p>}
            {tdee && (
              <p className="text-center">
                Macros: {protein}g Protein | {carbs}g Carbs | {fats}g Fats
              </p>
            )}
          </Card>
        </Col>

        <Col md={4}>
          <Card className="p-4 shadow-lg" style={{ backgroundColor: "#5d576b", color: "#f1ffc4" }}>
            <h4 className="text-center">1-Rep Max</h4>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Weight Lifted (lbs)</Form.Label>
                <Form.Control type="number" value={liftWeight} onChange={(e) => setLiftWeight(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Reps Performed</Form.Label>
                <Form.Control type="number" value={reps} onChange={(e) => setReps(e.target.value)} />
              </Form.Group>
              <Button className="w-100" style={{ backgroundColor: "#8884ff", border: "none" }} onClick={calculateOneRepMax}>
                Calculate 1RM
              </Button>
            </Form>
            {oneRepMax && <p className="mt-3 text-center">Estimated 1RM: <strong>{oneRepMax} lbs</strong></p>}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

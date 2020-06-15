import React, { useState } from "react";
import {
  Card,
  CardImg,
  Form,
  FormGroup,
  Input,
  CustomInput,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  Label,
  Button,
} from "reactstrap";
import axios from "axios";
import * as yup from "yup";
const OrderForm = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    number: 0,
    sauce: "",
    pepperoni: false,
    sausage: false,
    canadianBacon: false,
    spicyItalianSausage: false,
    grilledChicken: false,
    onions: false,
    greenPeppers: false,
    dicedTomatoes: false,
    roastedGarlic: false,
    pinapple: false,
    threeCheese: false,
    glutenFree: false,
    special: "",
  });
  const schema = yup.object().shape({
    name: yup.string().required().min(2),
    number: yup.number().required().positive().integer().min(10),
    sauce: yup.string().required(),
    special: yup.string().required(),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    canadianBacon: yup.boolean(),
    spicyItalianSausage: yup.boolean(),
    grilledChicken: yup.boolean(),
    onions: yup.boolean(),
    greenPeppers: yup.boolean(),
    dicedTomatoes: yup.boolean(),
    roastedGarlic: yup.boolean(),
    pinapple: yup.boolean(),
    threeCheese: yup.boolean(),
  });
  const submit = () => {
    schema.validate(formData).then(() => {
      axios.post("https://reqres.in/api/users", formData).then((res) => {
        console.log(res.data, "This is your posted data");
      });
    });
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleToppings = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };
  const handleSubstitutions = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <>
      <Card color="info">
        <h2 style={{ color: "white", margin: "0 auto" }}>
          Build Your Own Pizza!
        </h2>
        <CardImg
          style={{ width: "80%", margin: "0 auto" }}
          src={require("./Assets/Pizza.jpg")}
        ></CardImg>
      </Card>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
        style={{ width: "40%", margin: "5%" }}
      >
        {/* Name Field */}
        <FormGroup>
          <legend>Name</legend>
          <Input
            type="name"
            name="name"
            placeholder="Add your name here..."
            value={formData.name}
            onChange={handleChange}
          />
        </FormGroup>

        {/* Size of Pizza Section */}
        <FormGroup>
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
              {formData.number === 0
                ? "Size of Pizza in Inches"
                : formData.number}
            </DropdownToggle>
            <DropdownMenu>
              <div
                onClick={() => {
                  toggle();
                  setFormData({ ...formData, number: 0 });
                }}
              >
                0
              </div>
              <div
                onClick={() => {
                  toggle();
                  setFormData({ ...formData, number: 10 });
                }}
              >
                10"
              </div>
              <div
                onClick={() => {
                  toggle();
                  setFormData({ ...formData, number: 12 });
                }}
              >
                12"
              </div>
              <div
                onClick={() => {
                  toggle();
                  setFormData({ ...formData, number: 14 });
                }}
              >
                14"
              </div>
              <div
                onClick={() => {
                  toggle();
                  setFormData({ ...formData, number: 16 });
                }}
              >
                16"
              </div>
            </DropdownMenu>
          </Dropdown>
        </FormGroup>

        {/* Sauce Section */}
        <FormGroup tag="fieldset">
          <legend style={{ backgroundColor: "#87c7d1" }}>Type of Sauce</legend>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="sauce"
                value="original red"
                onChange={handleChange}
              />
              Original Red
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="sauce"
                value="garlic ranch"
                onChange={handleChange}
              />
              Garlic Ranch
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="sauce"
                value="BBQ Sauce"
                onChange={handleChange}
              />
              BBQ Sauce
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="sauce"
                value="spinach alfredo"
                onChange={handleChange}
              />
              Spinach Alfredo
            </Label>
          </FormGroup>
        </FormGroup>

        {/* Toppings Section */}
        <FormGroup>
          <legend style={{ backgroundColor: "#87c7d1" }}>Add Toppings</legend>
          <h6>Choose up to 4</h6>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="canadianBacon"
                checked={formData.canadianBacon}
                onChange={handleToppings}
              />
              Canadian Bacon
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="grilledChicken"
                checked={formData.grilledChicken}
                onChange={handleToppings}
              />
              Grilled Chicken
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="pepperoni"
                checked={formData.pepperoni}
                onChange={handleToppings}
              />
              Pepperoni
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="sausage"
                checked={formData.sausage}
                onChange={handleToppings}
              />
              Sausage
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="spicyItalianSausage"
                checked={formData.spicyItalianSausage}
                onChange={handleToppings}
              />
              Spicy Italian Sausage
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="dicedTomatoes"
                checked={formData.dicedTomatoes}
                onChange={handleToppings}
              />
              Diced Tomatoes
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="greenPeppers"
                checked={formData.greenPeppers}
                onChange={handleToppings}
              />
              Green Peppers
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="onions"
                checked={formData.onions}
                onChange={handleToppings}
              />
              Onions
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="pineapple"
                checked={formData.pineapple}
                onChange={handleToppings}
              />
              Pineapple
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="roastedGarlic"
                checked={formData.roastedGarlic}
                onChange={handleToppings}
              />
              Roasted Garlic
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="threeCheese"
                checked={formData.threeCheese}
                onChange={handleToppings}
              />
              Three Cheese
            </Label>
          </FormGroup>
        </FormGroup>

        {/* Substitutions Section */}
        <FormGroup>
          <legend style={{ backgroundColor: "#87c7d1" }}>Substitutions</legend>
          <h6>Choose up to 1</h6>
          <FormGroup>
            <Label>
              <CustomInput
                type="switch"
                name="glutenFree"
                checked={formData.glutenFree}
                onChange={handleSubstitutions}
                id="glutenFree"
              />
              Gluten Free Crust (+ $100)
            </Label>
          </FormGroup>
        </FormGroup>

        {/* Special Instructions Section */}
        <FormGroup>
          <legend style={{ backgroundColor: "#87c7d1" }}>
            Special Instructions
          </legend>
          <Input
            type="textarea"
            name="special"
            placeholder="Add special instructions here..."
            value={formData.special}
            onChange={handleChange}
          />
        </FormGroup>

        <Button>Place Order</Button>
      </Form>
    </>
  );
};

export default OrderForm;

import React, { useState } from "react";
import {
  Card,
  CardImg,
  Form,
  FormGroup,
  Input,
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
    protein: "",
    cilantro: false,
    onion: false,
    lime: false,
    avocado: false,
    special: "",
  });
  const schema = yup.object().shape({
    name: yup.string().required().min(2),
    number: yup.number().required().positive().integer().min(1),
    sauce: yup.string().required(),
    protein: yup.string().required(),
    special: yup.string().required(),
    cilantro: yup.boolean(),
    onion: yup.boolean(),
    lime: yup.boolean(),
    avocado: yup.boolean(),
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
        style={{ margin: "5%" }}
      >
        <FormGroup>
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
              {formData.number === 0 ? "Size of Pizza" : formData.number}
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
                  setFormData({ ...formData, number: 1 });
                }}
              >
                1
              </div>
              <div
                onClick={() => {
                  toggle();
                  setFormData({ ...formData, number: 2 });
                }}
              >
                2
              </div>
              <div
                onClick={() => {
                  toggle();
                  setFormData({ ...formData, number: 3 });
                }}
              >
                3
              </div>
              <div
                onClick={() => {
                  toggle();
                  setFormData({ ...formData, number: 4 });
                }}
              >
                4
              </div>
            </DropdownMenu>
          </Dropdown>
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>Type of Sauce</legend>
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

        <legend>Add Toppings</legend>
        <h6>Choose up to 10</h6>
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
              name="canadian bacon"
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
              name="spicy italian sausage"
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
              name="grilled chicken"
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
              name="green peppers"
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
              name="diced tomatoes"
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
              name="black olives"
              checked={formData.blackOlives}
              onChange={handleToppings}
            />
            Black Olives
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="checkbox"
              name="roasted garlic"
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
              name="artichoke hearts"
              checked={formData.artichokeHearts}
              onChange={handleToppings}
            />
            Artichoke Hearts
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="checkbox"
              name="pineapple"
              checked={formData.pinapple}
              onChange={handleToppings}
            />
            Pineapple
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="checkbox"
              name="three cheese"
              checked={formData.cheese}
              onChange={handleToppings}
            />
            Three Cheese
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="checkbox"
              name="extra cheese"
              checked={formData.extraCheese}
              onChange={handleToppings}
            />
            Extra Cheese
          </Label>
        </FormGroup>

        <FormGroup check>
          <legend>Substitutions</legend>
          <h6>Choose up to 1</h6>
          <Label check>
            <Input
              type="checkbox"
              name="gluten free"
              checked={formData.glutenFree}
              onChange={handleToppings}
            />
            Gluten Free Crust ($100)
          </Label>
        </FormGroup>

        <FormGroup>
          <legend>Special Instructions</legend>
          <Input
            type="textarea"
            name="special"
            value={formData.special}
            onChange={handleChange}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </>
  );
};

export default OrderForm;

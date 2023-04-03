import React from "react";
import { Meta, Story } from "@storybook/react";
import CheckBox from "./CheckBox";

export default{
    title: "atoms/Checkbox",
    component: CheckBox,
    argTypes : {
        size: {
            control:{
                type: "radio",
                options: ["small", "medium"]
            }
        },
        color:{
            control: {
                type: "radio",
                options: ["inherit" , "success" , "error" , "warning" , "primary" , "secondary" , "info"]
            }
        }
    }
}as Meta<typeof CheckBox>;

const Template:Story<typeof CheckBox> = (args) => <CheckBox {...args}/>;

export const Primary = Template.bind({});
Primary.args = {label:"zemoso", color:"primary", size: "small"};

export const Secondary = Template.bind({});
Secondary.args = {label:"zemoso", color:"error", size: "medium"};
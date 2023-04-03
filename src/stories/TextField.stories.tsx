import React from "react";
import { Story, Meta } from "@storybook/react";
import InputField from "./TextField";

export default {
    title: "atoms/InputField",
    component: InputField,
    argTypes: {
        variate:{
            type: "select",
            options: ["standard", "filled", "outlined"]
        },
        type:{
            control:{
                type: "radio",
                options: ["number", "text", "password", "email"]
            }
        },
        label:{
            control:{
                type: "text"
            }
        }
    }
}as  Meta<typeof InputField>;

const Template: Story<typeof InputField> = (args)=> <InputField {...args}/>;

export const Standard = Template.bind({});
Standard.args = {variate: "standard", backgroundColor:"white", type:"text", label:"sandeep"};

export const Filler = Template.bind({});
Filler.args = {variate: "filled", backgroundColor:"white", type:"number", label:"sandeep"};

export const Outlined = Template.bind({});
Outlined.args = {variate: "outlined", backgroundColor:"white", type:"password", label:"sandeep"};
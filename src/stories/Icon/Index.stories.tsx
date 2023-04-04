

import { Meta, Story } from "@storybook/react";
import Icon from "./Index";
import logo from "../assestes/Logo.png";
import logo1 from "../assestes/Logo1.png";

export default {
    title: "atoms/Icon",
    component: Icon,
    argTypes: {
        src: {
            control:{
                type: "text"
            }
        },
        width: {
            control: {
                type: "number"
            }
        },
        height: {
            control: {
                type: "number"
            }
        }
    }
}as Meta<typeof Icon>;


const Template:Story<typeof Icon> = (args) => <Icon {...args}/>;

export const Demo = Template.bind({});
Demo.args = {src:logo, alt:"primary", width: 16, height: 16};

export const Fake = Template.bind({});
Fake.args = {src: logo1, alt:"error", width: 16, height: 16};
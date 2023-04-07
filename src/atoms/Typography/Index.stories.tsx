
import { Story , Meta } from "@storybook/react";
import CustomTypography from "./Index";

export default {
    title: "atoms/Custum-Typography",
    component: CustomTypography,
    argTypes: {
        variate: {
            type: 'select',
            options: ['body1', 'body2', 'button', 'caption', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'inherit', 'overline', 'subtitle1', 'subtitle2', 'string']
        },
        gutterButton: {
            type: 'check',
            options: ["true", "false"]
        },
        paragraph: {
            type: 'check',
            options: ["true", "false"]
        },
        label: {
            control: {
                type: "string",
            }
        },
        color: {
            control: {
                type: "radio",
                options: ["primary", "secondary"]
            }
        }
    }
} as Meta<typeof CustomTypography>;

const Template: Story<typeof CustomTypography> = (args)=> <CustomTypography {...args}/>;

export const FieldStory = Template.bind({});
FieldStory.args = {variate: "h1",gutterButton:true , label:"sandeep",paragraph: false, color: "primary"};
import { Text, Field, RichText } from '@sitecore-jss/sitecore-jss-nextjs';

type MyComponentProps = {
  fields: {
    heading: Field<string>,
    body: Field<string>  
  };
}

const MyComponent = (props: MyComponentProps): JSX.Element => (
  <div>
    <Text field={props.fields.heading} />
    <RichText field={props.fields.body} />
  </div>
);

export default MyComponent;
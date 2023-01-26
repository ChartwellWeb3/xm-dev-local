import { Text, Field, RichText } from '@sitecore-jss/sitecore-jss-nextjs';

type MyComponentProps = {
  fields: {
    Title: Field<string>,
    Desc: Field<string>  
  };
}

const MyComponent = (props: MyComponentProps): JSX.Element => (
  <div>
    <Text field={props.fields.Title} />
    <RichText field={props.fields.Desc} />
   
  </div>
);

export default MyComponent;
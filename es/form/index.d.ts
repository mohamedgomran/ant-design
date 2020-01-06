import InternalForm, { useForm, FormInstance } from './Form';
import Item from './FormItem';
import List from './FormList';
import { FormProvider } from './context';
declare type InternalForm = typeof InternalForm;
interface Form extends InternalForm {
    useForm: typeof useForm;
    Item: typeof Item;
    List: typeof List;
    Provider: typeof FormProvider;
    /** @deprecated Only for warning usage. Do not use. */
    create: () => void;
}
declare const Form: Form;
export { FormInstance };
export default Form;

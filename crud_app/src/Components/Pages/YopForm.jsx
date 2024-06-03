import * as Yup from 'yup';

export const validationSchema = Yup.object({
    name:  Yup.string().min(3).max(20).required('Name is required'),
    lname: Yup.string().min(3).max(20).required('Name is required'),
    phone: Yup.number().min(9).required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').max(10, 'Password max be at least 10 characters').required('Password is required'),
    one:   Yup.boolean(),
    two:   Yup.boolean(),
    three: Yup.boolean().test('oneOfRequired', 'At least one checkbox must be selected', function (value) {
        const { one, two, three } = this.parent;
        return one || two || three;
    })
});

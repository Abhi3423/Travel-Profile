import { Fragment, useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const QuestionForm = () => {

    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            mode: "",
            distance: "",
        },
        validationSchema: Yup.object().shape({
            mode: Yup.string().required("* mode is required"),
            distance: Yup.string().required("* distance is required"),
        }),
        onSubmit: (values) => {

            console.log(values);
            localStorage.setItem("person", JSON.stringify(values));
            navigate("/mode-choice");

        },
    });


    return (
        <Fragment>
            <div className="rounded-md border-2 border-gray-600">
                <form onSubmit={formik.handleSubmit} className="p-3">

                    {/* Mode */}
                    <div className="flex flex-col gap-2 p-2">
                        <label htmlFor="mode">Q1. What is your most frequently used means of travel from your home to work location ? </label>
                        <div
                            id="mode"
                            className="btn-group btn-group-toggle flex flex-col sm:flex-row items-center gap-3 font-normal ml-8"
                            data-toggle="buttons"
                        >
                            <label>
                                Bus
                                <input
                                    className="border-solid ml-2"
                                    type="radio"
                                    name="mode"
                                    value="Bus"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </label>

                            <label>
                                Metro
                                <input
                                    className="border-solid ml-2"
                                    type="radio"
                                    name="mode"
                                    value="Metro"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </label>

                            <label>
                                Own Two-wheeler
                                <input
                                    className="border-solid ml-2"
                                    type="radio"
                                    name="mode"
                                    value="Own Two-wheeler"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </label>

                            <label>
                                Own Car
                                <input
                                    className="border-solid ml-2"
                                    type="radio"
                                    name="mode"
                                    value="Own Car"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </label>

                            <label>
                                Walk/Bicycle
                                <input
                                    className="border-solid ml-2"
                                    type="radio"
                                    name="mode"
                                    value="Walk/Bicycle"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </label>

                            <label>
                                Auto
                                <input
                                    className="border-solid ml-2"
                                    type="radio"
                                    name="mode"
                                    value="Auto"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </label>

                            <label>
                                App based ride hailing cab services including Ola / Uber
                                <input
                                    className="border-solid ml-2"
                                    type="radio"
                                    name="mode"
                                    value="Ride-hailing Car"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </label>

                        </div>
                        {formik.touched.mode && formik.errors.mode ? (
                            <div className="text-red-500 text-xs ml-8 mt-1">
                                {formik.errors.mode}
                            </div>
                        ) : (
                            <div className="text-red-500 text-xs ml-8 mt-1 w-full h-4"></div>
                        )}
                    </div>

                    {/* Distance */}
                    <div className="flex flex-col gap-2 p-2">
                        <label htmlFor="distance">Q2. What is the total distance between your home and workplace ? </label>
                        <div
                            id="distance"
                            className="btn-group btn-group-toggle flex flex-col sm:flex-row gap-3 font-normal ml-8"
                            data-toggle="buttons"
                        >
                            <label>
                                &lt;5km
                                <input
                                    className="border-solid ml-2"
                                    type="radio"
                                    name="distance"
                                    value="<5km"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </label>

                            <label>
                                5 - 10 km
                                <input
                                    className="border-solid ml-2"
                                    type="radio"
                                    name="distance"
                                    value="5-10km"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </label>

                            <label>
                                10 - 15 km
                                <input
                                    className="border-solid ml-2"
                                    type="radio"
                                    name="distance"
                                    value="10-15km"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </label>

                            <label>
                                15 - 20 km
                                <input
                                    className="border-solid ml-2"
                                    type="radio"
                                    name="distance"
                                    value="15-20km"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </label>

                            <label>
                                &gt;25km
                                <input
                                    className="border-solid ml-2"
                                    type="radio"
                                    name="distance"
                                    value=">25km"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </label>

                        </div>
                        {formik.touched.distance && formik.errors.distance ? (
                            <div className="text-red-500 text-xs ml-8 mt-1">
                                {formik.errors.distance}
                            </div>
                        ) : (
                            <div className="text-red-500 text-xs ml-8 mt-1 w-full h-4"></div>
                        )}
                    </div>

                    {/* Next Button */}
                    <div className="justify-center flex w-full">
                        <button
                            className="flex gap-1 bg-green-700 text-white text-xs p-2.5 px-5 rounded-md"
                            type="submit"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                />
                            </svg>
                            Next
                        </button>
                    </div>

                </form>
            </div>
        </Fragment>
    );
}

export default QuestionForm;
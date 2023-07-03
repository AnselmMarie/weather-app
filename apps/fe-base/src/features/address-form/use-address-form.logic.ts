import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Joi from 'joi';

// import { useAppDispatch, useAppSelector } from '../../hooks/redux.hooks';
// import { fetchForecastByAddress } from '../../services/weather-address/weather-address-api.slice';
import { IAddress, useLazyGetWeatherQuery } from '../../services';

import { IUiAddress } from '.';
import './address-form.css';

const schema = Joi.object({
    streetAddress: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().max(2).required(),
    zipCode: Joi.string().max(5).allow(''),
});

const useAddressFormLogic = (): IUiAddress => {
    const { register, handleSubmit, reset } = useForm();
    const [getWeather, result] = useLazyGetWeatherQuery();
    const { data, error, isError, isSuccess, isLoading, isFetching } = result;

    const [address, setAddress] = useState<IAddress | null>(null);
    const [payloadObj, setPayloadObj] = useState<IAddress | null>(null);
    const [open, setOpen] = useState(false);
    const [serverError, setServerError] = useState<any>(null);
    const [validationErrors, setValidationErrors] = useState<any>(null);

    const submit = (payload: IAddress) => {
        const isValidated = schema.validate(payload, { abortEarly: false });

        if (isValidated?.error) {
            setValidationErrors(isValidated?.error?.details);
            return;
        }

        setValidationErrors(null);
        fetchForecast(payload);
    };

    const openModal = (): void => {
        setOpen(true);
    };

    const handleClose = (): void => {
        if (payloadObj !== null) {
            reset(payloadObj);
        } else {
            reset();
        }
        setOpen(false);
        setPayloadObj(null);
        setServerError(null);
        setValidationErrors(null);
    };

    const fetchForecast = async (payload: IAddress) => {
        setPayloadObj(payload);

        try {
            await getWeather(payload).unwrap();
        } catch (err) {
            console.error('error', `Fetch failed:`);
        }
    };

    useEffect(() => {
        if (isError) {
            setServerError(error);
        }
    }, [isError]);

    useEffect(() => {
        if (!data) {
            openModal();
        }

        if (isSuccess && !isError) {
            setAddress(payloadObj);
            handleClose();
        }
    }, [data]);

    console.log('data', data);

    return {
        validationErrors,
        serverError,
        isLoading,
        address,
        open,
        onRegister: register,
        onOpenModal: openModal,
        onHandleSubmit: handleSubmit,
        onHandleClose: handleClose,
        onSubmit: submit,
    };
};

export default useAddressFormLogic;

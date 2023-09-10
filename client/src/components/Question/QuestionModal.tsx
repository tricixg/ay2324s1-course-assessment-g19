import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
	closeQuestionModal,
	selectQuestionModal,
} from '../../features/modal/modalSlice';
import { addQuestion } from '../../features/questions/questionsSlice';
import { Question } from '../../types';
import Heading from '../Heading';
import Input from '../Input';
import Modal from '../Modal';
import TextArea from '../TextArea';

const QuestionModal = () => {
	const dispatch = useDispatch();
	const modal = useSelector(selectQuestionModal);
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FieldValues>({
		defaultValues: {
			title: '',
			description: '',
			category: '',
			complexity: '',
		},
	});

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);

		try {
			dispatch(addQuestion(data as Question));
			dispatch(closeQuestionModal());
			reset();
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	const bodyContent = (
		<div className="flex flex-col gap-4">
			<Heading title="Create a new question!" />
			<Input
				id="title"
				label="Title"
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
			<Input
				id="category"
				label="Category"
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
			<Input
				id="complexity"
				label="Complexity"
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
			<TextArea
				id="description"
				label="Description"
				disabled={isLoading}
				register={register}
				errors={errors}
			/>
		</div>
	);

	return (
		<Modal
			isOpen={modal.isOpen}
			title="Add Question"
			actionLabel="Add"
			onClose={onClose}
			onSubmit={handleSubmit(onSubmit)}
			body={bodyContent}
		/>
	);

	function onClose() {
		dispatch(closeQuestionModal());
	}
};

export default QuestionModal;

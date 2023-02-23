import React from "react";
import IconButton from "@/components/Button/IconButton";
import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import Order from "@/types/Order";
import axios from "axios";

interface AdminOrderRowProps {
	order: Order;
}

const AdminOrderRow = ({ order }: AdminOrderRowProps) => {


	// Delete order from database
	const handleDeleteOrder = async () => {
		const DELETE_ORDER_API_URL = `http://localhost:4000/api/orders/${order._id}`;
		const response = await axios({
			method: "DELETE",
			url: DELETE_ORDER_API_URL,
			validateStatus: () => true,
		});

		const result = response.data;
    const { error, message } = result;
	};

	return (
		<tr>
			<td className="border-2 border-gray-200 px-4">{order._id}</td>
			<td className="border-2 border-gray-200 px-4">12 Dec 2022</td>
			<td className="border-2 border-gray-200 px-4">{`$${order.totalPrice}`}</td>
			<td className="border-2 border-gray-200 px-4">12 Dec 2022</td>
			<td className="border-2 border-gray-200 px-4">12 Dec 2022</td>
			<td className="border-2 border-gray-200 px-4">
				<div className="flex items-center justify-center">
					<IconButton
						icon={faEye}
						variant="primaryIcon"
						size="normal"
						url={`/orders/${order._id}`}
					/>
					<IconButton
						icon={faTrash}
						variant="primaryIcon"
						size="normal"
						onClick={handleDeleteOrder}
					/>
				</div>
			</td>
		</tr>
	);
};

export default AdminOrderRow;

import React from "react";
import IconButton from "@/components/Button/IconButton";
import {
	faAngleLeft,
	faAngleRight,
	faAnglesLeft,
	faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import { getOrderPaginationURL } from "@/lib/urlUtils";

interface AdminOrderPaginationProps {
	page: number;
	pages: number;
	order: number;
}

const AdminOrderPagination = ({
	page,
	pages,
	order,
}: AdminOrderPaginationProps) => {

	const [perpage, setPerpage] = useState(10);

	const firstButtonURL = getOrderPaginationURL(1, perpage, order);
	const lastButtonURL = getOrderPaginationURL(pages, perpage, order);
	const nextButtonURL = getOrderPaginationURL(page + 1, perpage, order);
	const previousButtonURL = getOrderPaginationURL(page - 1, perpage, order);

	return (
		<div className="flex  items-center justify-end gap-4 border-2 border-gray-200 px-6">
			<form className="flex items-center gap-4">
				<label htmlFor="rows_per_page">Rows per page</label>
				<select name="rows_per_page" id="rows_per_page">
					<option value="5">5</option>
					<option value="10">10</option>
					<option value="15">15</option>
				</select>
			</form>
			<span>1-10 of 100</span>
			<div className="flex items-center gap-2">
				{/*First button*/}
				<IconButton icon={faAnglesLeft} size="normal" variant="white" url={firstButtonURL} />

				{/*Previous button*/}
				<IconButton icon={faAngleLeft} size="normal" variant="white" url={previousButtonURL} />

				{/*Next button*/}
				<IconButton icon={faAngleRight} size="normal" variant="white" url={nextButtonURL} />

				{/*Last button*/}
				<IconButton icon={faAnglesRight} size="normal" variant="white" url={lastButtonURL} />
			</div>
		</div>
	);
};

export default AdminOrderPagination;

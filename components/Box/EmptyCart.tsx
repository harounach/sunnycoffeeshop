import React from 'react'
import Link from "next/link";
import { BaseProps } from "@/types/BaseProps";

interface EmptyCartProps extends BaseProps {

}

const EmptyCart = ({}: EmptyCartProps) => {
	return (
		<div>
		  <p className="text-center text-xl">Cart is empty, <Link className="text-yellow-700" href="/products">Start shopping now!</Link></p>		
		</div>
	)
}

export default EmptyCart
import { useState, useEffect } from 'react';
import { useAppSelector } from '@/state/hooks';
import { selectUser } from "@/state/userSlice";

export const useUserStatus = () => {
	const user = useAppSelector(selectUser);
	return user.name ? true : false;
}
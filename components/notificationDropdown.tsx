"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Notification {
    id: number;
    type: "comment" | "reply" | "file" | "account";
    user: string;
    action: string;
    target?: string;
    message?: string;
    file?: { name: string; size: string };
    time: string;
    isRead: boolean;
    avatar?: string;
}

export default function NotificationDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [notifications, setNotifications] = useState<Notification[]>([
        {
            id: 1,
            type: "comment",
            user: "Ray Arnold",
            action: "left 6 comments on",
            target: "Isla Nublar SOC2 compliance report",
            time: "Last Wednesday at 9:42 AM",
            isRead: false
        },
        {
            id: 2,
            type: "reply",
            user: "Denise Nedry",
            action: "replied to",
            target: "Anna Srzand",
            message: "Oh, I finished de-bugging the phones, but the system's compiling for eighteen minutes, or twent...",
            time: "Last Wednesday at 9:42 AM",
            isRead: false
        },
        {
            id: 3,
            type: "file",
            user: "John Hammond",
            action: "attached a file to",
            target: "Isla Nublar SOC2 compliance report",
            file: { name: "EY_review.pdf", size: "2mb" },
            time: "Last Wednesday at 9:42 AM",
            isRead: false,
            avatar: "/assets/images/svg/avtar.svg"
        },
        {
            id: 4,
            type: "comment",
            user: "Denise Nedry",
            action: "commented on",
            target: "Isla Nublar SOC2 compliance report",
            message: "Oh, I finished de-bugging the phones, but the system's compiling for eighteen minutes, or twent...",
            time: "Last Wednesday at 9:42 AM",
            isRead: true,
            avatar: "/assets/images/svg/avtar.svg"
        },
        {
            id: 5,
            type: "account",
            user: "New Account",
            action: "created",
            time: "Last Wednesday at 9:42 AM",
            isRead: true
        }
    ]);

    const markAllAsRead = () => {
        setNotifications(notifications.map(n => ({ ...n, isRead: true })));
    };

    const unreadCount = notifications.filter(n => !n.isRead).length;

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Notification Bell Icon */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-2 hover:bg-gray-100 rounded-full transition cursor-pointer"
            >
                <svg
                    className="w-6 h-6 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                </svg>
                {unreadCount > 0 && (
                    <span className="absolute top-0.5 right-0.5 w-[14px] h-[14px] bg-red-500 text-white text-[9px] rounded-full flex items-center justify-center font-semibold">
                        {unreadCount}
                    </span>
                )}
            </button>

            {/* Notification Dropdown */}
            {isOpen && (
                <div className="fixed right-4 top-25 w-[400px] bg-white rounded-lg shadow-2xl border border-gray-200 z-[9999] max-h-[calc(100vh-100px)] overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-200">
                        <div className="flex items-center gap-2">
                            <h3 className="text-sm font-semibold text-[#1A1F36]">Notifications</h3>
                            <select className="text-xs font-medium text-gray-500 border-none outline-none bg-transparent cursor-pointer">
                                <option>All</option>
                                <option>Unread</option>
                            </select>
                        </div>
                        <button
                            onClick={markAllAsRead}
                            className="text-sm font-normal text-[#170085] hover:underline flex items-center gap-1 cursor-pointer"
                        >
                            Mark all as read
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Notifications List */}
                    <div className="overflow-y-auto custom-scrollbar" style={{ maxHeight: 'calc(100vh - 200px)' }}>
                        {notifications.map((notification) => (
                            <div
                                key={notification.id}
                                className="p-4 border-b border-gray-100 bg-white hover:bg-gradient-to-r hover:from-[#F0F0FF] hover:to-[#E8E8FF] transition cursor-pointer rounded-[4px]"
                            >
                                <div className="flex gap-3 relative">
                                    {/* Avatar or Icon */}
                                    <div className="flex-shrink-0 relative">
                                        {notification.type === "account" ? (
                                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                                </svg>
                                            </div>
                                        ) : notification.avatar ? (
                                            <div className="w-10 h-10 rounded-full overflow-hidden">
                                                <Image
                                                    src={notification.avatar}
                                                    alt={notification.user}
                                                    width={40}
                                                    height={40}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        ) : (
                                            <div className="w-10 h-10 bg-gradient-to-br from-[#170085] to-[#407BFF] rounded-full flex items-center justify-center">
                                                <span className="text-white font-semibold text-sm">
                                                    {notification.user.charAt(0).toUpperCase()}
                                                </span>
                                            </div>
                                        )}
                                        {!notification.isRead && (
                                            <div className="w-2.5 h-2.5 bg-blue-500 rounded-full absolute -top-0.5 -left-0.5 border-2 border-white"></div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm text-gray-900">
                                            <span className="font-semibold">{notification.user}</span>{" "}
                                            {notification.action}{" "}
                                            {notification.target && (
                                                <span className="font-semibold">{notification.target}</span>
                                            )}
                                        </p>

                                        {/* Message */}
                                        {notification.message && (
                                            <div className="mt-2 p-2 bg-gray-100 rounded text-sm text-gray-700 border-l-2 border-gray-300">
                                                "{notification.message}"
                                            </div>
                                        )}

                                        {/* File */}
                                        {notification.file && (
                                            <div className="mt-2 flex items-center gap-2 p-2 bg-gray-100 rounded">
                                                <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                <span className="text-sm font-medium text-gray-900">
                                                    {notification.file.name}
                                                </span>
                                                <span className="text-xs text-gray-500">{notification.file.size}</span>
                                            </div>
                                        )}

                                        {/* Add to favorites button */}
                                        {notification.message && notification.id === 4 && (
                                            <button className="mt-2 text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1">
                                                <span>+</span> Add to favorites
                                            </button>
                                        )}

                                        {/* Time */}
                                        <p className="mt-2 text-xs text-gray-400">{notification.time}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

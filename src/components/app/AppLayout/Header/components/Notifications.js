import React, { useEffect } from "react";
import io from "socket.io-client";
import { useQuery } from "react-query";
import { getNotifications } from "../../../../../api/notifications";

export const socket = io("http://www.localhost:5000");

const testEV = ["create", "update", "delete", "confirm"];

const Notifications = () => {
  const { refetch } = useQuery("notifications", getNotifications, {
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    const { id } = JSON.parse(localStorage.getItem("user"));
    socket.on("connect", () => {
      socket.emit("data", id);
      testEV.forEach((ev) => {
        socket.on(`test:${ev}`, async () => {
          await refetch();
        });
      });
    });
  }, []);
};

export default Notifications;

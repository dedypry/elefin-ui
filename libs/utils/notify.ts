/* eslint-disable @typescript-eslint/no-explicit-any */

import "react-toastify/dist/ReactToastify.css";
import "sweetalert2/src/sweetalert2.scss";
import { toast, ToastOptions, ToastPosition } from "react-toastify";
import Swal from "sweetalert2";
import debounce from "./debounce";


export function notifyError(err: any, type: "SA" | "" = "") {
  const msg = err?.response?.data?.message;

  if (typeof msg === "string") {
    toast.error(msg);
  } else {
    if ((err?.response?.data?.message || []).length) {
      if (type === "SA") {
        errorSA(err?.response?.data?.message[0]);
      } else {
        err.response.data.message.forEach((e: string) => {
          toast.error(e);
        });
      }
    }
  }
}

export function notify(
  msg: string,
  type: "success" | "error" = "success",
  sa: "SA" | "" = "",
  position: ToastPosition = "top-center",
) {
  const opt = {
    position: position,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  } as ToastOptions;

  if (type === "success") {
    if (sa === "SA") {
      successSA(msg);
    } else {
      toast.success(msg, opt);
    }
  } else {
    if (sa === "SA") {
      errorSA(msg);
    } else {
      toast.error(msg, opt);
    }
  }
}

export function sweetAlert() {
  Swal.fire({
    title: "Error!",
    text: "Do you want to continue",
    icon: "error",
    confirmButtonText: "Cool",
  });
}
export function errorSA(msg = "") {
  Swal.fire({
    html: `
    <div style="display: flex; align-items: center; flex-direction: column; justify-content: center; gap: 15px; padding: 20px 0;">
      <!-- Custom SVG Icon -->
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_697_15916)">
          <path d="M40 0C43.6719 0 47.2135 0.46875 50.625 1.40625C54.0365 2.34375 57.2135 3.69792 60.1562 5.46875C63.099 7.23958 65.7943 9.32292 68.2422 11.7188C70.6901 14.1146 72.7865 16.8099 74.5312 19.8047C76.276 22.7995 77.6172 25.9896 78.5547 29.375C79.4922 32.7604 79.974 36.3021 80 40C80 43.6719 79.5312 47.2135 78.5938 50.625C77.6562 54.0365 76.3021 57.2135 74.5312 60.1562C72.7604 63.099 70.6771 65.7943 68.2812 68.2422C65.8854 70.6901 63.1901 72.7865 60.1953 74.5312C57.2005 76.276 54.0104 77.6172 50.625 78.5547C47.2396 79.4922 43.6979 79.974 40 80C36.3281 80 32.7865 79.5312 29.375 78.5938C25.9635 77.6562 22.7865 76.3021 19.8438 74.5312C16.901 72.7604 14.2057 70.6771 11.7578 68.2812C9.3099 65.8854 7.21354 63.1901 5.46875 60.1953C3.72396 57.2005 2.38281 54.0104 1.44531 50.625C0.507813 47.2396 0.0260417 43.6979 0 40C0 36.3281 0.46875 32.7865 1.40625 29.375C2.34375 25.9635 3.69792 22.7865 5.46875 19.8438C7.23958 16.901 9.32292 14.2057 11.7188 11.7578C14.1146 9.3099 16.8099 7.21354 19.8047 5.46875C22.7995 3.72396 25.9896 2.38281 29.375 1.44531C32.7604 0.507813 36.3021 0.0260417 40 0ZM40 60C42.7614 60 45 57.7614 45 55C45 52.2386 42.7614 50 40 50C37.2386 50 35 52.2386 35 55C35 57.7614 37.2386 60 40 60ZM40 45C42.7614 45 45 42.7614 45 40V25C45 22.2386 42.7614 20 40 20C37.2386 20 35 22.2386 35 25V40C35 42.7614 37.2386 45 40 45Z" fill="#EE3135"/>
        </g>
        <defs>
        <clipPath id="clip0_697_15916">
        <rect width="80" height="80" fill="white"/>
        </clipPath>
        </defs>
      </svg>
      <!-- Custom Text -->
      <span style="font-size: 18px; font-weight: 400;">${msg}</span>
    </div>
  `,
    showConfirmButton: false,
    showCloseButton: true,
  });
}
export function successSA(msg = "") {
  Swal.fire({
    html: `
    <div style="display: flex; align-items: center; flex-direction: column; justify-content: center; gap: 15px; padding: 20px 0;">
      <!-- Custom SVG Icon -->
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="40" fill="#00A339"/>
      <path d="M67.8785 21.2125C69.0501 22.384 69.0501 24.2835 67.8785 25.4551L31.4141 61.9196C30.633 62.7006 29.3667 62.7006 28.5856 61.9196L13.7878 47.1218C12.6163 45.9502 12.6163 44.0507 13.7878 42.8791L14.2478 42.4192C15.4183 41.2486 17.3158 41.2475 18.4878 42.4166L29.9998 53.9005L63.1785 20.7531C64.3503 19.5825 66.249 19.5829 67.4202 20.7541L67.8785 21.2125Z" fill="white"/>
      <rect x="11.6538" y="45.0195" width="6.66685" height="25.9168" rx="2.50007" transform="rotate(-45.0106 11.6538 45.0195)" fill="white"/>
      <rect x="65.2759" y="18.6191" width="6.66412" height="56.5696" rx="2.49904" transform="rotate(45 65.2759 18.6191)" fill="white"/>
      </svg>

      <!-- Custom Text -->
      <span style="font-size: 18px; font-weight: 400;">${msg}</span>
    </div>
  `,
    showConfirmButton: false,
    showCloseButton: true,
  });
}
export function warningSA(msg = "") {
  Swal.fire({
    html: `
    <div style="display: flex; align-items: center; flex-direction: column; justify-content: center; gap: 15px; padding: 20px 0;">
      <!-- Custom SVG Icon -->
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_697_15910)">
      <path d="M40 80C62 80 80 62 80 40C80 18 62 0 40 0C18 0 0 18 0 40C0 62 18 80 40 80ZM35 24.5C35 22.0147 37.0147 20 39.5 20C41.9853 20 44 22.0147 44 24.5C44 26.9853 41.9853 29 39.5 29C37.0147 29 35 26.9853 35 24.5ZM48 56.4444C48 58.4081 46.4081 60 44.4444 60H35.5556C33.5919 60 32 58.4081 32 56.4444V54.8571C32 53.2792 33.2792 52 34.8571 52C35.4883 52 36 51.4883 36 50.8571V45.1429C36 44.5117 35.4883 44 34.8571 44C33.2792 44 32 42.7208 32 41.1429V39.5556C32 37.5919 33.5919 36 35.5556 36H40C42.2091 36 44 37.7909 44 40V50.8571C44 51.4883 44.5117 52 45.1429 52C46.7208 52 48 53.2792 48 54.8571V56.4444Z" fill="#05A0C0"/>
      </g>
      <defs>
      <clipPath id="clip0_697_15910">
      <rect width="80" height="80" fill="white"/>
      </clipPath>
      </defs>
      </svg>

      <!-- Custom Text -->
      <span style="font-size: 18px; font-weight: 400;">${msg}</span>
    </div>
  `,
    showConfirmButton: false,
    showCloseButton: true,
  });
}

export const debounceNotify = debounce(
  (msg, type: "success" | "error" = "success", isMobile, sa = "") =>
    notify(msg, type, sa, isMobile ? "bottom-center" : "top-center"),
  1000,
);

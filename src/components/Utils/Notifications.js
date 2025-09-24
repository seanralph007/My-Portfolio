import Swal from "sweetalert2";

export const alertMessage = () => {
  Swal.fire({
    title: "Good Job",
    text: "Message sent successfully",
    icon: "success",
    confirmButtonText: "Ok",
    confirmButtonColor: "#00ffcc",
    background: "#f0f0f0",
    color: "#0a0a23",
  });
};

import Swal from 'sweetalert2';

interface AlertOptions {
  icon: 'success' | 'error' | 'warning' | 'info' | 'question';
  title: string;
  position?: 'top' | 'top-start' | 'top-end' | 'center' | 'center-start' | 'center-end' | 'bottom' | 'bottom-start' | 'bottom-end';
  timer?: number;
}

const showAlert = ({
  icon,
  title,
  position = 'top-end',
  timer = 3000
}: AlertOptions) => {
  return Swal.fire({
    icon,
    title,
    toast: true,
    position,
    showConfirmButton: false,
    timer,
    timerProgressBar: true,
  });
};

export default showAlert;
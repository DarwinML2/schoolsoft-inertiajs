import { FieldError } from "@/Components/forms/inputs/FieldError";
import { FieldLabel } from "@/Components/forms/inputs/FieldLabel";
import { cn } from "@/lib/utils";
import { useCallback, useEffect, useId } from "react";
import { useDropzone } from "react-dropzone";
import { useTranslation } from "react-i18next";
interface ProfilePictureFieldProps {
  label?: string;
  error?: string;
  data: any;
  initialFile?: string;
  name: string;
  setData: (key: string, value: any) => void;
  disabled?: boolean;
}
type FileWithPreview = File & { preview: string };
export function ProfilePictureField({
  label = "Foto de perfil",
  data,
  initialFile,
  setData,
  error,
  name,
  disabled,
}: ProfilePictureFieldProps) {
  const { t } = useTranslation();
  const id = useId();
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      });
      setData(name, file);
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    onDrop,
    maxFiles: 1,
    disabled,
    multiple: false,
    accept: { "image/*": [] },
  });
  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => {
      if (data[name]) {
        data[name]?.forEach((file: FileWithPreview) => URL.revokeObjectURL(file.preview));
      }
    };
  }, []);
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        {...getRootProps()}
        className={cn(
          "relative flex aspect-square size-[250px] items-center justify-center overflow-hidden rounded-full border-2 border-dashed px-2 shadow-sm",
          disabled ? "cursor-not-allowed bg-muted" : "cursor-pointer bg-background",
          { "cursor-not-allowed border-destructive": isDragReject },
        )}
      >
        <input id={id} {...getInputProps()} />
        <p
          className={cn(
            "absolute z-20 text-balance text-center font-serif text-sm font-medium text-input",
          )}
        >
          {isDragActive
            ? t("Drop an image here...")
            : data[name]
              ? t("Drag and drop, or click to change the image")
              : t("Drag and drop, or click to select an image")}
        </p>
        {data[name] || initialFile ? (
          <div className="absolute">
            <img
              src={data[name] ? data[name].preview : initialFile}
              className="z-10 aspect-square object-cover"
              onLoad={() => {
                if (data[name]) URL.revokeObjectURL(data[name].preview);
              }}
            />
          </div>
        ) : null}
      </div>
      <FieldLabel className="mt-1" id={id} label={t(label)} error={error} />
      <FieldError error={error} />
    </div>
  );
}

import {FileControl} from "../../features/FileControl";
import {JobControl} from "../../features/JobControl";
import {Tools} from "../../features/Tools";

export const ToolArea = () => {
    return (
        <div className="border p-3 flex-1 flex gap-2 box-border">
            <div className="w-full border p-3 box-border">
                <FileControl />
            </div>
            <div className="w-full border p-3 box-border">
                <JobControl />
            </div>
            <div className="w-full border p-3 box-border">
                <Tools />
            </div>
        </div>
    );
};
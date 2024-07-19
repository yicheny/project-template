import {curryUsePost} from "@common/hooks/usePost";
import {mockPost} from "../../localDB/apis";

export const usePostM = curryUsePost(mockPost)
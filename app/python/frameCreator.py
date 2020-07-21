import ctypes
import time
import cv2
import os
import sys
from tqdm import tqdm


def create_frames(video, frames):
    if video.isOpened() == False:
        print("69")
        input()
        return False

    total_frames = int(video.get(cv2.CAP_PROP_FRAME_COUNT))
    fps = video.get(cv2.CAP_PROP_FPS)

    if frames == None or frames == "":
        frames = total_frames
    elif frames > total_frames:
        input()
        return False

    success, image = video.read()
    print(int(frames))
    for i in range(frames):
        cv2.imwrite(f"frames/frame{i+1}.jpg", image)
        success, image = video.read()
        #print(int((i*100)/frames))
        sys.stdout.flush()

    print(100)

def create_folder():
    if not os.path.exists(f"{os.getcwd()}/frames"):
        os.makedirs(f"{os.getcwd()}/frames")

def main():
    path = sys.argv[1]
    video = cv2.VideoCapture(path)

    while True:
        try:
            frames = ""
            if frames != "":
                frames = int(frames)
            break
        except:
            print("That isn't a valid number!")

    create_folder()

    create_frames(video, frames)

if __name__ == "__main__":
    main()

